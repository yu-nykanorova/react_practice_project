import {type FC, useContext} from "react";
import type {IPost} from "../../../models/post/IPost.ts";
import {MyContext} from "../../../context/MyContext.tsx";

type PostProps = {
    post: IPost;
}

export const PostItem: FC<PostProps> = ({post}) => {
    const {theme} = useContext(MyContext);

    const postCardClass = `${theme === "dark" ? "bg-stone-900" : "bg-white"}`;

    return (
        <li className={`p-4 rounded-md shadow-md ${postCardClass}`}>
            <p><span className="font-semibold text-lime-600">ID: {post.id}</span> (user {post.userId})</p>
            <h2 className="mb-2 text-yellow-600 text-[20px] text-shadow-2xs">{post.title}</h2>
            <p className="mb-2">{post.body}</p>
            <div className="flex items-center gap-2">
                {
                    post.tags.map((tag, index) => (
                        <p className="text-lime-600" key={index}>#{tag}</p>
                    ))
                }
            </div>
        </li>
    );
};
