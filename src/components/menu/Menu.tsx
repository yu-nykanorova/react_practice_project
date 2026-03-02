import {NavLink} from "react-router-dom";

export const Menu= () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `font-semibold text-2xl ${isActive ? "text-teal-200" : "text-white"}`;

    return (
        <div className="w-screen fixed bg-gray-700 shadow-lg">
            <ul className="max-w-300 mx-auto py-10 px-6 flex items-center justify-evenly">
                <li><NavLink to={"/"} className={menuItemClass}>HOME</NavLink></li>
                <li><NavLink to={"users"} className={menuItemClass}>USERS</NavLink></li>
                <li><NavLink to={"posts"} className={menuItemClass}>POSTS</NavLink></li>
            </ul>
        </div>
    );
};
