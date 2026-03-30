import {useQuery} from "@tanstack/react-query";
import {get} from "../../use-api.ts";

interface User {
    id: string;
    name: string;
}

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => get<User[]>("users"),
    });
};