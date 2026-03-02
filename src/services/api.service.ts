import {urls} from "../constants/urls.ts";

export const itemsService = {
    getAll: async <T>(category: string): Promise<T> => {
        const result = await fetch(urls.allItems(category));
        return await result.json();
    }
}