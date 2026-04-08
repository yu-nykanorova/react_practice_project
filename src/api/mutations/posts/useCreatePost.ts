import {useMutation, useQueryClient} from "@tanstack/react-query";
import {post} from "../../use-api.ts";

interface RequestProps {
    title: string;
    body: string;
    userId: string;
    error?: string;
}

interface Response extends Omit<RequestProps, "userId"> {
    id: number;
    userId: number;
}

export const useCreatePost = () => {
    const queryClient = useQueryClient();

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
        onSuccess: async (data) => {
           if (data && !data.error) {
                await queryClient.refetchQueries({queryKey: ["posts", 5, 0
           ]})
           }
        },
        onError: (error) => {
            console.log(error);
            throw error;
        },
        retry: false,
    })
};
