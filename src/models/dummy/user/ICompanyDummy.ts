import type {IAddressDummy} from "./IAddressDummy.ts";

export interface ICompanyDummy {
    department: string;
    name: string;
    title: string;
    address: IAddressDummy;
}