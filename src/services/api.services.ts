import type {IComment} from "../models/commentModel.ts";

export const getComments = async ():Promise<IComment[]> => {
    return await fetch(import.meta.env.VITE_API_URL + "/comments")
    .then((res) => res.json());
}