import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";

export const useQueryClientConfig = (): QueryClient => {
    return new QueryClient({
        queryCache: new QueryCache({
            onSuccess: (data: any, query) => {
                console.log({ data, query });
            }
        }),
        mutationCache: new MutationCache({
            onSuccess: (data: any) => {
                console.log({ data });
            }
        }),
        defaultOptions: {
            queries: { refetchOnWindowFocus: true },
        }
    });
};

