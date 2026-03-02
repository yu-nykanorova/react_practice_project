import type {FC} from "react";
import type {IPostDummy} from "../../../models/dummy/post/IPostDummy.ts";

type PostProps = {
    post: IPostDummy;
};

export const PostItemDummy: FC<PostProps> = ({post}) => {
    return (
        <li className="item-card">
            <p className="w-full p-4 text-[28px] text-right font-semibold text-black bg-rose-200 rounded-t-xl">Post {post.id}</p>
            <p className="w-full p-2 text-[24px] font-semibold text-right">User #{post.userId}</p>
            <h2 className="w-full p-4 text-center font-semibold">{post.title}</h2>
            <p className="w-full px-6 pb-4 text-gray-950 text-[24px] text-justify">{post.body}</p>
            <div className="w-full mt-auto px-6 py-4 bg-gray-300 rounded-b-xl">
                <p className="text-common">{post.views} views</p>
                <div className="my-2 px-6 py-2 flex justify-between items-center border-y border-purple-950">
                    <p className="text-green-600 text-[24px]">Likes: {post.reactions.likes}</p>
                    <p className="text-red-600 text-[24px]">Dislikes: {post.reactions.dislikes}</p>
                </div>
                <div className="px-6 flex gap-8">
                    {
                        post.tags.map((tag, index) => (
                            <p className="text-[22px] font-semibold" key={index}>#{tag}</p>
                        ))
                    }
                </div>
            </div>
        </li>
    );
};
