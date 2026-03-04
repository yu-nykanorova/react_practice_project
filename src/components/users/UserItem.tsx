import type {FC} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserProps = {
    user: IUser;
};

export const UserItem: FC<UserProps> = ({user}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`carts/${user.id}`, {state: user})
    }

    return (
        <li
            className="bg-gray-50 rounded-sm cursor-pointer shadow-xl"
            onClick={handleOnClick}
        >
            <p className="p-1 text-[14px] font-semibold bg-teal-200  rounded-t-sm">USER #{user.id}</p>
            <h2 className="p-1 text-[16px] text-emerald-950">{user.firstName} {user.lastName}</h2>
        </li>
    );
};
