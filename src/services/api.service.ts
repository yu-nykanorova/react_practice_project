import type {ITodo} from "../models/todoModel.ts";

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URL + "todos")
        .then((res) => res.json());
}