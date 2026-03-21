import {MainMenu} from "../menu/MainMenu.tsx";
import {MyContext} from "../../context/MyContext.tsx";
import {useContext} from "react";

export const Header = () => {
    const {theme} = useContext(MyContext);

    const menuClass = `${theme === "dark" ? "dark-header" : ""}`;

    return (
        <header className={`w-screen fixed bg-stone-200 shadow-md z-10 ${menuClass}`}>
            <MainMenu/>
        </header>
    );
};
