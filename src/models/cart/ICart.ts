import type {IProduct} from "./IProduct.ts";

export interface ICart {
    id: number;
    userId: number;
    products: IProduct[];
    totalProducts: number;
    totalQuantity: number;
    total: number;
    discountedTotal: number;
}

