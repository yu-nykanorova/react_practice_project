import type {ICommentsObjModel} from "../models/commentModel.ts";

export const getComments = async ():Promise<ICommentsObjModel> => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/comments");
    return res.json();
}