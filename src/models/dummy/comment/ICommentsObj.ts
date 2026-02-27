import type {ICommentDummy} from "./ICommentDummy.ts";

export interface ICommentsObj {
    users: ICommentDummy[];
    total: number;
    skip: number;
    limit: number;
}