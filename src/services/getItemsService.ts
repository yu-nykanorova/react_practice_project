import {axiosInstance} from "./api.service.ts";

export const getItems = async <T, >(url: string): Promise<T> => {
    const {data} = await axiosInstance.get<T>(url);
    return data;
};

export const getItem = async <T, >(url: string, id: string): Promise<T> => {
    const {data} = await axiosInstance.get<T>(`${url}/${id}`);
    return data;
}