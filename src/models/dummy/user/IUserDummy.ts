import type {ICryptoDummy} from "./ICryptoDummy.ts";
import type {IAddressDummy} from "./IAddressDummy.ts";
import type {IBankDummy} from "./IBankDummy.ts";
import type {ICompanyDummy} from "./ICompanyDummy.ts";

export interface IUserDummy {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair;
    ip: string;
    address: IAddressDummy;
    macAddress: string;
    university: string;
    bank: IBankDummy;
    company: ICompanyDummy;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICryptoDummy;
    role: string;
}


export interface IHair {
	color: string;
	type: string;
}






