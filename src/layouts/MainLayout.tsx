import {Outlet} from "react-router-dom";
import {MainMenu} from "../components/menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <div className="min-h-screen relative text-stone-900 bg-olive-50">
            <MainMenu />
            <div className="min-h-screen max-w-300 mx-auto pt-20 px-10">
                <Outlet/>
            </div>
        </div>
    );
};