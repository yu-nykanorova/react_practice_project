import type {IPost} from "../models/postModel.ts";

export const getPosts = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URL + "/posts")
                    .then(res => res.json());
}
