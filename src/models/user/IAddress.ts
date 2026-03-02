import type {IGeo} from "./IGeo.ts";

export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
    coordinates: IGeo;
}