import {NavLink} from "react-router-dom";

export const Menu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `text-xl ${isActive ? "text-teal-200" : "text-white"}`;

    return (
        <div className="w-screen fixed bg-gray-700 shadow-lg z-10">
            <ul className="max-w-300 mx-auto py-4 px-6 flex items-center justify-evenly">
                <li><NavLink to={"/"} className={menuItemClass}>HOME</NavLink></li>
                <li><NavLink to={"users"} className={menuItemClass}>USERS</NavLink></li>
            </ul>
        </div>
    );
};