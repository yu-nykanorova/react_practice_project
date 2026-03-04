import {NavLink} from "react-router-dom";
import {ArrowRight} from "../ui/ArrowRight.tsx";

export const SourceMenu = () => {

    const menuItemClass = ({isActive}: {isActive: boolean}) => (
        `
            px-4 py-2 flex items-center justify-between gap-2 bg-gray-50 text-xl rounded-2xl cursor-pointer transition duration-200 ease-in-out hover:bg-purple-200 shadow-md
            ${isActive ? "bg-purple-200 font-semibold" : ""}
        `
    );

    return (
        <ul className="max-w-1/3 mx-auto mt-4 mb-6 flex flex-col gap-2">
            <li>
                <NavLink to={"jsonplaceholder"} className={menuItemClass} >
                    JSONPlaceholder
                    <ArrowRight/>
                </NavLink>
            </li>
            <li>
                <NavLink to={"dummyjson"} className={menuItemClass}>
                    DummyJSON
                    <ArrowRight/>
                </NavLink>
            </li>
        </ul>
    );
};
