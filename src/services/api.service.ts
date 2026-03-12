import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = `Bearer ${retrieveLocalStorage<IUserWithTokens>("user").accessToken}`;
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<void> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/login", {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
};

export const refresh = async () => {
    const userWithTokens = retrieveLocalStorage<IUserWithTokens>("user");

    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {refreshToken: userWithTokens.refreshToken, expiresInMins: 1});

    console.log(accessToken, refreshToken);

    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;

    localStorage.setItem("user", JSON.stringify(userWithTokens));
}

export const loadAuthResource = async <T>(url: string, resource: string): Promise<T[]> => {
    const {data} = await axiosInstance.get(url, {});
    return data[resource];
}
