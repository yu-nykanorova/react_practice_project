import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const MainLayout = () => {
    const {theme} = useContext(MyContext);

    const layoutClass = `${theme === "dark" ? "dark-layout" : ""}`;

    return (
        <div className={`min - h - screen relative text-stone-900 bg-olive-50 ${layoutClass}`}>
            <Header/>
            <div className="min-h-screen max-w-300 mx-auto pt-30 px-10">
                <Outlet/>
            </div>
        </div>
    );
};