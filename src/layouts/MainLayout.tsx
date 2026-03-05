import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div className="relative bg-gray-500">
            <Menu/>
            <div className="max-w-300 mx-auto min-h-screen pt-20 pb-10 text-center text-3xl text-white">
                <Outlet/>
            </div>
        </div>
    );
};