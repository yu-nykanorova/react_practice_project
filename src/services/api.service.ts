import type {IPostsObjModel} from "../models/postModel.ts";

export const getPosts = async (): Promise<IPostsObjModel> => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/posts");
    return res.json();
}
