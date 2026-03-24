import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";

type UserProps = {
    user: IUser;
};

export const UserItem: FC<UserProps> = ({user}) => {
    return (
        <li className="flex flex-col items-start gap-2 bg-white rounded-xl shadow-md">
            <Link className="w-full" to={`/users/${user.id}`}>
                <p className="w-full px-2 py-1 text-white text-[18px] text-right bg-lime-600 rounded-t-xl">USER #{user.id}</p>
                <h2 className="px-2 font-semibold text-[22px] text-yellow-600">{user.name}</h2>
                <h3 className="px-2 text-[18px] self-center">({user.username})</h3>
                <p className="w-full mt-1 px-2 text-[18px] font-semibold">Contacts:</p>
                <p className="w-full px-2">Email: {user.email}</p>
                <p className="w-full mb-1 px-2">Phone: {user.phone}</p>
            </Link>
        </li>
    );
};
