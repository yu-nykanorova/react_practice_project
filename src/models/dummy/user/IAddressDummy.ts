import type {IGeoDummy} from "./IUserDummy.ts";

export interface IAddressDummy {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
    coordinates: IGeoDummy;
}