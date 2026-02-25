import "./Menu.css";
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li>
                    <Link to={"users"}>USERS</Link>
                </li>
                <li>
                    <Link to={"posts"}>POSTS</Link>
                </li>
            </ul>
        </div>
    );
};
