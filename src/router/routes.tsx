import {createBrowserRouter, Navigate} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element: <Navigate to="users"/>},
            {path: "users", element: <UsersPage/>},
            {path: "users/:id", element: <UserPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "complex", element: <ComplexPage/>},
        ]
    }
]);