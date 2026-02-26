import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="relative">
            <Menu/>
            <div className="min-h-screen pt-38 text-center text-3xl text-red-600 bg-gray-200">
                <Outlet/>
            </div>
        </div>
    );
};
