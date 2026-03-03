import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

export const Layout = () => {
    return (
        <div className="relative">
            <Menu/>
            <div className="min-h-screen pt-20 text-center text-3xl text-gray-950 bg-gray-200">
                <Outlet/>
            </div>
        </div>
    );
};
