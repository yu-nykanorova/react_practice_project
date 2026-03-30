import {useQuery} from "@tanstack/react-query";
import {get} from "../../use-api.ts";

interface User {
    id: string;
    name: string;
}

export const useGetUser = ({userId}: {userId: string}) => {
    return useQuery({
        queryKey: ["users", userId],
        queryFn: () => get<User>(`users/${userId}`)
    });
};