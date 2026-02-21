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
            <p className="text-lg leading-6">{(post.body)[0].toUpperCase() + (post.body).slice(1)}</p>
        </li>
    );
};
