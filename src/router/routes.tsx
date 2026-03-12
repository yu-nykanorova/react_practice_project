import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";
import {ProductsList} from "../components/products-list/ProductsList.tsx";
import {RecipesList} from "../components/recipes-list/RecipesList.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "auth/resources/",
                element: <AuthResourcesPage/>,
                children: [
                    {
                        path: "",
                        element: <div className="my-8 text-[26px] text-center text-pink-800">Choose the resources category...</div> ,
                    },
                    {
                        path: "products",
                        element: <ProductsList/>
                    },
                    {
                        path: "recipes",
                        element: <RecipesList/>
                    },
                ]
            }
        ]
    }
]);