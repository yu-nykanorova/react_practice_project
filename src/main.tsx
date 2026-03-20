import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import {routes} from "./router/routes.tsx"
import {MyContextProvider} from "./context/MyContextProvider.tsx";

createRoot(document.getElementById('root')!)
    .render(
        <MyContextProvider>
            <RouterProvider router={routes}/>
        </MyContextProvider>
    )
