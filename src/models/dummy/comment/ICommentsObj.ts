import type {ICommentDummy} from "./ICommentDummy.ts";

export interface ICommentsObj {
    comments: ICommentDummy[];
    total: number;
    skip: number;
    limit: number;
}