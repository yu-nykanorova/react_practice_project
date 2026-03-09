import axios from "axios";
import type {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {"Content-Type": "application/json"},
});

axiosInstance.interceptors.request.use((request) => {
    request.headers.set("XXX", "XXXX");
    console.log(request);
    return request;
});

// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// });

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>("/users");
    return data;
};

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>("/users", user);
    return data;
}
