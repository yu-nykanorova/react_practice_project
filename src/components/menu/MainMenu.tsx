import {NavLink} from "react-router-dom";

export const MainMenu= () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) => (
        `
            font-semibold text-2xl
            ${isActive ? "text-pink-400" : "text-white"}
        `
    );

    return (
        <div className="w-screen fixed bg-purple-600 shadow-lg">
            <ul className="max-w-300 mx-auto py-10 px-6 flex items-center justify-evenly">
                <li><NavLink to={"/"} className={menuItemClass}>HOME</NavLink></li>
                <li><NavLink to={"users"} className={menuItemClass}>USERS</NavLink></li>
                <li><NavLink to={"posts"} className={menuItemClass}>POSTS</NavLink></li>
                <li><NavLink to={"comments"} className={menuItemClass}>COMMENTS</NavLink></li>
            </ul>
        </div>
    );
};
