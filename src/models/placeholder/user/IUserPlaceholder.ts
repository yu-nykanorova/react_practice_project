import type {IAddressPlaceholder} from "./IAddressPlaceholder.ts";
import type {ICompanyPlaceholder} from "./ICompanyPlaceholder.ts";

export interface IUserPlaceholder {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: IAddressPlaceholder;
	company: ICompanyPlaceholder;
}


