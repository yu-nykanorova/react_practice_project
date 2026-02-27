import type {IUserDummy} from "./IUserDummy.ts";

export interface IUsersObj {
    users: IUserDummy[];
    total: number;
    skip: number;
    limit: number;
}