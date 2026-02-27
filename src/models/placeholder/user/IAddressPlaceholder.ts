import type {IGeoPlaceholder} from "./IUserPlaceholder.ts";

export interface IAddressPlaceholder {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: IGeoPlaceholder;
}