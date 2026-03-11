import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct, IProductsObjModel} from "../models/IProduct.ts";

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

const retrieveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || "";
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
};

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = `Bearer ${retrieveLocalStorage<IUserWithTokens>("user")}`;
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<void> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/login", {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductsObjModel>("/products", {});
    return data.products;
}