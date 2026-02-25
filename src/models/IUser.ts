import type {IAddress} from "./IAddress.ts";
import type {ICompany} from "./ICompany.ts";

export interface IUser {
    website: string;
    address: IAddress;
    phone: string;
    name: string;
    company: ICompany;
    id: number;
    email: string;
    username: string;
}



