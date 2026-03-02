 import {Link} from "react-router-dom";
import {ArrowRight} from "../ui/ArrowRight.tsx";

export const SourceMenu = () => {
    return (
        <ul className="mx-auto mt-4 mb-6 flex justify-center gap-2">
            <li className="w-60 px-4 py-2 bg-gray-50 text-xl rounded-2xl cursor-pointer transition duration-200 ease-in-out hover:bg-purple-200 shadow-md">
                <Link to={"jsonplaceholder"} className="flex items-center justify-between gap-2" >
                    JSONPlaceholder
                    <ArrowRight/>
                </Link>
            </li>
            <li className="w-60 px-4 py-2 bg-gray-50 text-xl rounded-2xl cursor-pointer transition duration-200 ease-in-out hover:bg-purple-200 shadow-md">
                <Link to={"dummyjson"} className="flex items-center justify-between gap-2">
                    DummyJSON
                    <ArrowRight/>
                </Link>
            </li>
        </ul>
    );
};
