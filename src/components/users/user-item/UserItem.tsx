import type {FC} from "react";
import type {IUser} from "../../../models/user/IUser.ts";

type UserProps = {
    user: IUser;
}

export const UserItem:FC<UserProps> = ({user}) => {
    return (
        <li>
            <h2>{user.firstName}</h2>
        </li>
    );
};
