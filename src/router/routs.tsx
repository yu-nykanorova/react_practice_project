// router object example

import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layouts/Layout.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {UsersPlaceholderPage} from "../pages/users-page/UsersPlaceholderPage.tsx";
import {UsersDummyPage} from "../pages/users-page/UsersDummyPage.tsx";
import {PostsPlaceholderPage} from "../pages/posts-page/PostsPlaceholderPage.tsx";
import {PostsDummyPage} from "../pages/posts-page/PostsDummyPage.tsx";
import {CommentsPlaceholderPage} from "../pages/comments-page/CommentsPlaceholderPage.tsx";
import {CommentsDummyPage} from "../pages/comments-page/CommentsDummyPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "users",
                element: <UsersPage/>,
                children: [
                    {index: true, element: <div>Select source...</div>},
                    {path: "jsonplaceholder", element: <UsersPlaceholderPage/>},
                    {path: "dummyjson", element: <UsersDummyPage/>},
                ]
            },
            {
                path: "posts",
                element: <PostsPage/>,
                children: [
                    {index: true, element: <div>Select source...</div>},
                    {path: "jsonplaceholder", element: <PostsPlaceholderPage/>},
                    {path: "dummyjson", element: <PostsDummyPage/>},
                ]
            },
            {
                path: "comments",
                element: <CommentsPage/>,
                children: [
                    {index: true, element: <div>Select source...</div>},
                    {path: "jsonplaceholder", element: <CommentsPlaceholderPage/>},
                    {path: "dummyjson", element: <CommentsDummyPage/>},
                ]
            },
        ]
    }
]);


