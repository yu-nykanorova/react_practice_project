import type {User} from "../models/userModel.ts";

export const getUsers = async (): Promise<User[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json());
}

export const getUser = async (id: string): Promise<User> => {
    return await fetch(import.meta.env.VITE_API_URL + id)
    .then(res => res.json());
}