import type {IGeo} from "./IGeo.ts";

export interface IAddress {
    zipcode: string;
    geo: IGeo;
    suite: string;
    city: string;
    street: string;
}