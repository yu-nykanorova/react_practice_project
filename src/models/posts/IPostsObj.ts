import type {IPost} from "./IPost.ts";

export interface IPostsObj {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}