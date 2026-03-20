import {NavLink} from 'react-router-dom'
import {ModeSwitcher} from "../mode-switcher/ModeSwitcher.tsx";

export const MainMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `p-1 text-xl ${isActive ? "font-semibold text-lime-600 border-b border-b-lime-600" : ""}`;

    return (
        <nav className="max-w-300 mx-auto px-10 py-2 flex justify-between items-center">
            <ul className="py-4 flex justify-between items-center gap-6">
                <li><NavLink to={"/"} className={menuItemClass}>Home</NavLink></li>
                <li><NavLink to={"users"} className={menuItemClass}>Users</NavLink></li>
            </ul>
            <ModeSwitcher/>
        </nav>
    );
};