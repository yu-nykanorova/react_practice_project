import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostProps = {
    post: IPost;
};

export const PostCard: FC<PostProps> = ({post}) => {
    return (
        <li className="p-4 flex flex-col items-start gap-2 bg-white rounded-xl shadow-md">
            <p className="text-[18px]"><span className=" text-lime-600 font-semibold">Post {post.id}</span> (user {post.userId})</p>
            <h2 className="px-2 text-[22px] text-yellow-600 leading-7">{post.title}</h2>
            <p>{post.body}</p>
        </li>
    );
};
