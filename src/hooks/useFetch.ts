import {useEffect, useState} from "react";
import {getItemsService} from "../services/getItems.service.ts";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItemsService<T>(url);
                setData(response);
            } catch (error) {
                setError("Fetching failed");
            }
        }
        fetchData();
    }, [url]);

    return { data, error };
}