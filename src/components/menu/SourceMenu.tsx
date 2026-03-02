 import {NavLink} from "react-router-dom";
import {ArrowRight} from "../ui/ArrowRight.tsx";

export const SourceMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `px-4 py-2 flex items-center justify-between gap-2 text-xl rounded-2xl cursor-pointer transition duration-200 ease-in-out
        ${isActive
            ? "bg-purple-200 font-semibold"
            : "bg-gray-50 hover:bg-purple-200"
    }`;

    return (
        <ul className="mx-auto mt-4 mb-6 flex justify-center gap-2">
            <li className="w-60 rounded-2xl shadow-md">
                <NavLink to={"jsonplaceholder"} className={menuItemClass}>
                    JSONPlaceholder
                    <ArrowRight/>
                </NavLink>
            </li>
            <li className="w-60 rounded-2xl shadow-md">
                <NavLink to={"dummyjson"} className={menuItemClass}>
                    DummyJSON
                    <ArrowRight/>
                </NavLink>
            </li>
        </ul>
    );
};
