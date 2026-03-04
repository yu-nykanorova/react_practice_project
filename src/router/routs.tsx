import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layouts/Layout.tsx";
import {AboutPage} from "../pages/AboutPage.tsx";
import {ContactsPage} from "../pages/ContactsPage.tsx";
import {CartsList} from "../components/carts/CartsList.tsx";
import {UsersList} from "../components/users/UsersList.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <HomePage/>,
                children: [
                    {
                        index: true,
                        element: <UsersList/>
                    },
                    {
                        path: "carts/:userId",
                        element: <CartsList/>
                    },
                ]
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "contacts",
                element: <ContactsPage/>
            }
        ]
    }
]);