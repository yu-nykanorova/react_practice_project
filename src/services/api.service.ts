import {urls} from "../constants/urls.ts";
import type {Source} from "../models/Source.ts";

export const itemsService = {
    getAll: async <T>(source: Source, category: string): Promise<T> => {
        const result = await fetch(urls.allItems(source, category));
        return await result.json();
    }
}