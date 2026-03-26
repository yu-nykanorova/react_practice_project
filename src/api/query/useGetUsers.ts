import {useQuery} from "@tanstack/react-query";

interface User {
    id: string;
    name: string;
}

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: async (): Promise<User[]> => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            return await response.json();
        }
    });
};