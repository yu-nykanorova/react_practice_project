const BASE_URL = "https://jsonplaceholder.typicode.com";

export const get = async <T, >(route: string): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}/${route}`);
        return await response.json();
    } catch (error) {
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
            throw new Error(error.message);
        }
        throw new Error("Network Error");
    }

};

export const post = async <T, >({route, body}: {route: string, body: unknown}): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}/${route}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (error) {
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
            throw new Error(error.message);
        }
        throw new Error("Network Error");
    }
};