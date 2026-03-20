import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

export const ModeSwitcher = () => {
    const {theme, toggleTheme} = useContext(MyContext);

    const themeClass = `${theme === "dark" ? "bg-white text-stone-800" : "text-white bg-stone-800"}`;

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <button className={`px-4 py-2 rounded-md ${themeClass}`} onClick={handleToggleTheme}>Theme</button>
    );
};
