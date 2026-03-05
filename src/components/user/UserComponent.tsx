import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserProps = {
    user: IUser;
}

export const UserComponent: FC<UserProps> = ({user}) => {
    return (
        <li>
            <div>
                <img src={user.avatar} alt={user.first_name}/>
            </div>
            <div>
                <p>USER #{user.id}</p>
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
            </div>
        </li>
    );
};
