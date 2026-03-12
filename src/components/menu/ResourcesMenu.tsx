import {NavLink} from "react-router-dom";

export const ResourcesMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `px-6 py-2 text-[22px] bg-white rounded-md ${isActive ? "font-semibold text-pink-600 shadow-xl" : "text-cyan-800 shadow-sm"}`;

    return (
        <>
            <ul className="max-w-300 mx-auto p-4 flex justify-center items-center gap-10">
                <li><NavLink to={"/auth/resources/products"} className={menuItemClass}>Products</NavLink></li>
                <li><NavLink to={"/auth/resources/recipes"} className={menuItemClass}>Recipes</NavLink></li>
            </ul>
        </>
    );
};