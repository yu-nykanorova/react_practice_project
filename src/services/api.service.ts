
export const getDataService = async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(endpoint);
    return res.json();
}