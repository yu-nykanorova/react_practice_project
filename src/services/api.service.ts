import {urls} from "../constants/urls.ts";
import type {Source} from "../models/Source.ts";

export const itemsService = {
    getAll: async <T>(source: Source, category: string): Promise<T> => {
        return await fetch(urls.allItems(source, category))
            .then(res => res.json());
    }
}