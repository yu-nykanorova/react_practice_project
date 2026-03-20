import type {FC} from "react";
import type {IPost} from "../../../models/post/IPost.ts";

type PostProps = {
    post: IPost;
}

export const PostItem: FC<PostProps> = ({post}) => {
    return (
        <li className="group p-4 bg-white rounded-md shadow-md transition-all duration-200 hover:bg-yellow-200">
            <p><span className="font-semibold text-lime-600">ID: {post.id}</span> (user {post.userId})</p>
            <h2 className="mb-2 text-yellow-600 text-[20px] text-shadow-2xs transition-all duration-200 group-hover:text-stone-900">{post.title}</h2>
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
