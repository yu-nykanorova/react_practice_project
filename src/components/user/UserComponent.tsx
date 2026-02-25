import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserComponentProps = {
    item: IUser;
}

export const UserComponent: FC<UserComponentProps> = ({item}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("posts/" + item.id, {state: item})
    }

    return (
        <div>
            <Link to={"details"} state={item}>{item.username}</Link>
            <br/>
            <button onClick={handleOnClick}>Posts</button>
        </div>
    );
};
