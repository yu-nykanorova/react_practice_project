import type {IResponseObj} from "../models/IResponseObj.ts";

const baseUrl = "https://dummyjson.com";

export const getUsersService = async (page: string): Promise<IResponseObj> => {
    const limit = 10;
    const skip = limit * (+page) - limit;
    const result = await fetch(`${baseUrl}/users?limit=${limit}&skip=${skip}`);
    return await result.json();
}