import {Link} from "react-router-dom";

export const MainMenu= () => {
    return (
        <div className="w-screen fixed bg-purple-600 shadow-lg">
            <ul className="max-w-300 mx-auto p-6 flex items-center justify-evenly text-white text-xl">
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"users"}>USERS</Link></li>
                <li><Link to={"posts"}>POSTS</Link></li>
                <li><Link to={"comments"}>COMMENTS</Link></li>
            </ul>
        </div>
    );
};
