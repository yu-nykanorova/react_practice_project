import type {IPostDummy} from "./IPostDummy.ts";

export interface IPostsObj {
    users: IPostDummy[];
    total: number;
    skip: number;
    limit: number;
}