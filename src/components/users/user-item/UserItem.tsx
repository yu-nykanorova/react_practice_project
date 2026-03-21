import {type FC, useContext} from "react";
import type {IUser} from "../../../models/user/IUser.ts";
import {MyContext} from "../../../context/MyContext.tsx";

type UserProps = {
    user: IUser;
}

export const UserItem:FC<UserProps> = ({user}) => {
    const {theme, setSelectedUser} = useContext(MyContext);

    const selectUser = () => {
        setSelectedUser(user);
    }

    const userCardClass = `${theme === "dark" ? "bg-stone-900 text-stone-200 hover:bg-stone-500" : "bg-white hover:bg-lime-200"}`;

    return (
        <li className={`group p-4 flex flex-col rounded-md shadow-md cursor-pointer transition-all duration-100 ${userCardClass}`}>
            <h2 className="mb-2 text-lime-600 text-[24px] text-shadow-2xs transition-all duration-200 group-hover:text-stone-900">{user.firstName} {user.lastName}</h2>
            <p className="mb-2">ID: {user.id}</p>
            <p className="text-[18px] font-semibold">Address:</p>
            <p>{user.address.address}, {user.address.city}</p>
            <p>{user.address.postalCode} {user.address.state}, {user.address.country}</p>
            <p className="text-[14px] font-semibold">Phone: {user.phone}</p>
            <p className="mb-2 text-[14px] font-semibold">Phone: {user.email}</p>
            <button className="mt-auto px-2 py-1 bg-lime-600 text-white rounded-md cursor-pointer" onClick={selectUser}>Show posts</button>
        </li>
    );
};
