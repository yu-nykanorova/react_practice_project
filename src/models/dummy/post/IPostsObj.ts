import type {IPostDummy} from "./IPostDummy.ts";

export interface IPostsObj {
    posts: IPostDummy[];
    total: number;
    skip: number;
    limit: number;
}