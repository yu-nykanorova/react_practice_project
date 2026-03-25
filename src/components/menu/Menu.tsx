import {NavLink} from 'react-router-dom';

export const Menu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `p-1 text-xl transition-all duration-200 ${isActive ? "font-semibold text-lime-600 border-b border-b-lime-600" : "hover:text-lime-600"}`;

    return (
        <nav className="max-w-300 mx-auto px-10 py-2 flex justify-between items-center">
            <ul className="py-4 flex justify-between items-center gap-6">
                <li><NavLink to={"users"} className={menuItemClass}>Users</NavLink></li>
                <li><NavLink to={"posts"} className={menuItemClass}>Posts</NavLink></li>
                <li><NavLink to={"comments"} className={menuItemClass}>Comments</NavLink></li>
                <li><NavLink to={"complex"} className={menuItemClass}>Complex</NavLink></li>
            </ul>
        </nav>
    );
};
