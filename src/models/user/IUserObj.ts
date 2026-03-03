import type {IUser} from "./IUser.ts";

export interface IUsersObj {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}