import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {get} from "../../use-api.ts";

interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
}

export const useGetPaginatedPosts = ({limit, offset}: {limit: number, offset: number}) => {

    return useQuery<Post[]>({
        queryKey: ["posts", limit, offset],
        queryFn: async () => {
            return get(`posts?_start=${offset}&_limit=${limit}`);
        },
        placeholderData: keepPreviousData,
        networkMode: "always", // стратегія запиту
        // refetchInterval: 2000, // polling, повторні запити через вказаний час
    });
};