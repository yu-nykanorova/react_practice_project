import {Outlet} from "react-router-dom";
import {MainMenu} from "../components/menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <div className="min-h-screen relative text-gray-800 bg-slate-100">
            <MainMenu />
            <div className="max-w-300 mx-auto">
                <Outlet/>
            </div>
        </div>
    );
};
