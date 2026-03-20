import type {FC} from "react";
import type {IUser} from "../../../models/user/IUser.ts";

type UserProps = {
    user: IUser;
}

export const UserItem:FC<UserProps> = ({user}) => {
    return (
        <li className="group p-4 bg-white rounded-md shadow-md transition-all duration-200 hover:bg-lime-200">
            <h2 className="mb-2 text-lime-600 text-[24px] text-shadow-2xs transition-all duration-200 group-hover:text-stone-900">{user.firstName} {user.lastName}</h2>
            <p className="mb-2">ID: {user.id}</p>
            <p className="text-[18px] font-semibold">Address:</p>
            <p>{user.address.address}, {user.address.city}</p>
            <p>{user.address.postalCode} {user.address.state}, {user.address.country}</p>
            <p className="text-[14px] font-semibold">Phone: {user.phone}</p>
            <p className="text-[14px] font-semibold">Phone: {user.email}</p>
        </li>
    );
};
