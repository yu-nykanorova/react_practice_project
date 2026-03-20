import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";

export const MainLayout = () => {
    return (
        <div className="min-h-screen relative text-stone-900 bg-olive-50">
            <Header/>
            <div className="min-h-screen max-w-300 mx-auto pt-30 px-10">
                <Outlet/>
            </div>
        </div>
    );
};