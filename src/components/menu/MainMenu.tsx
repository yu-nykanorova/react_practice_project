import {NavLink} from "react-router-dom";

export const MainMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `p-1 text-xl ${isActive ? "font-semibold text-orange-400 border-b border-b-orange-400" : ""}`;

    return (
        <div className="w-screen fixed bg-slate-300 shadow-lg z-10">
            <ul className="max-w-300 mx-auto p-4 flex justify-evenly items-center gap-6">
                <li><NavLink to={"/"} className={menuItemClass}>Home</NavLink></li>
                <li><NavLink to={"cars"} className={menuItemClass}>Cars</NavLink></li>
                <li><NavLink to={"addCar"} className={menuItemClass}>Add Car</NavLink></li>
            </ul>
        </div>
    );
};
