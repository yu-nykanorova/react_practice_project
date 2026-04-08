import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClientProvider} from "@tanstack/react-query";
import type {PropsWithChildren} from "react";
import {useQueryClientConfig} from "./api/use-query-client-config.ts";
import {CookiesProvider} from "react-cookie";

export const QueryClient = ({children}: PropsWithChildren) => {
    const queryClient = useQueryClientConfig();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <QueryClient>
            <App/>
        </QueryClient>
    </CookiesProvider>

);
