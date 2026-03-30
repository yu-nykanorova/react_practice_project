import {useMutation} from "@tanstack/react-query";
import {post} from "../../use-api.ts";

interface RequestProps {
    title: string;
    body: string;
    userId: string;
}

interface Response extends Omit<RequestProps, "userId"> {
    id: number;
    userId: number;
}

export const useCreatePost = () => {
    //const { post } =

    const route = "posts";

    return useMutation({
        mutationFn: async ({title, body, userId}: RequestProps): Promise<Response> => {
            return post ({
                route: route,
                body: {
                    title,
                    body,
                    userId,
                },
            });
        },
        retry: false,
    })
};
