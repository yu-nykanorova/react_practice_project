const baseUrl = "https://dummyjson.com";

export const urls = {
    allItems: (category: string) => {
        return `${baseUrl}/${category}`;
    }
};