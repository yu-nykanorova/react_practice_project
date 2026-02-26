// router object example

import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layouts/Layout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "products", element: <ProductsPage/>},
        ]
    }
]);


