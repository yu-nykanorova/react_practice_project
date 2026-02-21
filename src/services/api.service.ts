import type {ITodosObjModel} from "../models/todoModel.ts";

export const getTodos = async (): Promise<ITodosObjModel> => {
    const res = await fetch(import.meta.env.VITE_API_URL + "todos");
    return res.json();
}