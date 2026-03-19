import {axiosInstance} from "./api.service.ts";

export const getItemsService = async <T>(url: string): Promise<T> => {
    const {data} = await axiosInstance.get<T>(url);
    return data;
}
