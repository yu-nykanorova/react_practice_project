import type {IResponseObj} from "../models/IResponseObj.ts";

export const getUsers = async (pg: string): Promise<IResponseObj> => {
    return await fetch("https://reqres.in/api/users?page=" + pg, {headers: {"x-api-key": "reqres_28bc068b3df74da7a9e103ddc5ee011f"}})
        .then(res => res.json())
}