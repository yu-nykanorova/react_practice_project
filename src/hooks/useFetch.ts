import {useEffect, useState} from "react";
import {getItemsService} from "../services/getItems.service.ts";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [data, setData] = useState<T>(defaultValue);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItemsService<T>(url);
                setData(response);
            } catch (error) {
                setError(`Fetching error: ${error}`);
            }
        }
        fetchData();
    }, [url]);

    return { data, error };
}