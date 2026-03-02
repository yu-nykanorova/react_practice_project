import type {FC} from "react";
import type {IPostPlaceholder} from "../../../models/placeholder/post/IPostPlaceholder.ts";

type PostProps = {
    post: IPostPlaceholder;
};

export const PostItemPlaceholder: FC<PostProps> = ({post}) => {

    const title = post.title.charAt(0).toUpperCase() + post.title.slice(1);

    return (
        <li className="item-card">
            <p className="w-full p-4 text-[28px] text-right font-semibold text-black bg-rose-200 rounded-t-xl">Post {post.id}</p>
            <p className="w-full p-2 text-[24px] font-semibold text-right">User #{post.userId}</p>
            <h2 className="w-full p-4 text-center font-semibold">{title}</h2>
            <p className="w-full px-6 pb-4 text-gray-950 text-[24px] text-justify">{post.body}</p>
        </li>
    );
};
