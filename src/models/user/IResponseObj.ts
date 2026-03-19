import type {IUser} from "./IUser.ts";

export interface IResponseObj {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}