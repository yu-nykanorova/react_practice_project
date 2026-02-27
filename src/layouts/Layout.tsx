import {MainMenu} from "../components/menu/MainMenu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="relative">
            <MainMenu/>
            <div className="min-h-screen pt-30 text-center text-3xl text-purple-950 bg-gray-200">
                <Outlet/>
            </div>
        </div>
    );
};
