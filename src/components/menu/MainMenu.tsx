import {NavLink} from 'react-router-dom'

export const MainMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `p-1 text-xl ${isActive ? "font-semibold text-lime-600 border-b border-b-lime-600" : ""}`;

    return (
        <div className="w-screen fixed bg-stone-200 shadow-md z-10">
            <ul className="max-w-300 mx-auto p-4 flex justify-evenly items-center gap-6">
                <li><NavLink to={"/"} className={menuItemClass}>Home</NavLink></li>
                <li><NavLink to={"users"} className={menuItemClass}>Users</NavLink></li>
                <li><NavLink to={"posts"} className={menuItemClass}>Posts</NavLink></li>
            </ul>
        </div>
    );
};