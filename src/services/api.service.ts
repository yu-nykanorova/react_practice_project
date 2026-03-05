import type {IResponseObj} from "../models/IResponseObj.ts";

const baseUrl = "https://dummyjson.com";

export const getUsersService = async (limit: string, skip: string): Promise<IResponseObj> => {
    const result = await fetch(`${baseUrl}/users?limit=${limit}&skip=${skip}`);
    return await result.json();
}