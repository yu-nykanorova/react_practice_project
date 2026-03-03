import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layouts/Layout.tsx";
import {AboutPage} from "../pages/AboutPage.tsx";
import {ContactsPage} from "../pages/ContactsPage.tsx";
import {CartsList} from "../components/carts/CartsList.tsx";

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
                        element: <div className="p-2 flex-[0_0_45%] text-red-800 text-xl">Click user to show carts list</div>
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