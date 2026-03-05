import type {IUser} from "./IUser.ts";
import type {ISupport} from "./ISupport.ts";
import type {IMeta} from "./IMeta.ts";

export interface IResponseObj {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: ISupport;
    meta: IMeta;
}






