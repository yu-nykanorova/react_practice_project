import {urls} from "../constants/urls.ts";
import type {IUsersObj} from "../models/user/IUserObj.ts";
import type {ICartObj} from "../models/cart/ICartObj.ts";

export const userService = {
    getAllUsers: async (): Promise<IUsersObj> => {
        const result = await fetch(urls.users.allUsers);
        return result.json();
    },

};

export const cartService = {
    getAllCarts: async (): Promise<ICartObj> => {
        const result = await fetch(urls.carts.allCarts);
        return result.json();
    },
    getUserCartsById: async (id: number): Promise<ICartObj> => {
        const result = await fetch(urls.carts.userCartsById(id));
        return result.json();
    }
}