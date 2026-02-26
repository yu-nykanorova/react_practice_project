import {Link} from "react-router-dom";

export const Menu= () => {
    return (
        <div className="w-screen fixed bg-purple-600 shadow-lg">
            <ul className="max-w-300 mx-auto py-10 px-6 flex items-center justify-evenly text-white font-semibold text-2xl">
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"users"}>USERS</Link></li>
                <li><Link to={"posts"}>POSTS</Link></li>
                <li><Link to={"comments"}>COMMENTS</Link></li>
                <li><Link to={"products"}>PRODUCTS</Link></li>
            </ul>
        </div>
    );
};
