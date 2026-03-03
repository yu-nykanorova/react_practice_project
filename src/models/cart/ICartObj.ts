import type {ICart} from "./ICart.ts";

export interface ICartObj {
    carts: ICart[],
    total: number;
    skip: number;
    limit: number;
}