import {type FC} from "react";
import type {IPost} from "../models/postModel.ts";

type PostComponentProps = {
    post: IPost;
}

export const PostComponent: FC<PostComponentProps> = ({post}) => {
    return (
        <li className="flex flex-col p-4 bg-gray-100">
            <p className="text-lg font-semibold">Post - {post.id}</p>
            <p className="text-lg font-semibold text-red-800">User #{post.userId}</p>
            <h2 className="min-h-20 mb-4 mt-4 text-green-800 text-2xl font-semibold">{(post.title)[0].toUpperCase() + (post.title).slice(1)}</h2>
            <p className="mb-2 text-lg leading-6">{(post.body)[0].toUpperCase() + (post.body).slice(1)}</p>
            <p className="mb-2 text-blue-700"> {post.views} views</p>
            <div className="mb-2 p-2 flex justify-between items-center bg-gray-300">
                <p className="text-green-700">like: {post.reactions.likes}</p>
                <p className="text-red-700">dislike: {post.reactions.dislikes}</p>
            </div>
            <div className="flex gap-3">
                {
                    post.tags.map((tag, index) => (
                        <a href="#" key={index}>#{tag}</a>
                    ))
                }
            </div>
        </li>
    );
};
