import type {Source} from "../models/Source.ts";

const baseUrls = {
    placeholder: "https://jsonplaceholder.typicode.com",
    dummy: "https://dummyjson.com"
};

export const urls = {
  allItems: (source: Source, category: string) => {
    return `${baseUrls[source]}/${category}`;
  }
};