import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";
import type {IUser} from "../../models/IUser.ts";

type UserComplexProps = {
    user: IUser;
    posts: IPost[];
    comments: IComment[];
};

export const UserItemComplex: FC<UserComplexProps> = ({user, posts, comments}) => {

    return (
        <>
            <div className="px-2">
                <h2 className="font-semibold text-[24px] text-yellow-600">{user.name}</h2>
                <p className="text-lg">USER #{user.id} ({user.username})</p>
                <p className="w-full mt-1 text-[18px] font-semibold">Contacts:</p>
                <p className="w-full">Email: {user.email}</p>
                <p className="w-full mb-1">Phone: {user.phone}</p>
            </div>
            <div>
                <h3 className="my-2 px-2 text-[18px] text-yellow-600 font-semibold">Posts:</h3>
                <ul className="grid grid-cols-1 gap-6">
                    {
                        posts.map((post) => (
                            <li className="flex flex-col bg-slate-200 rounded-md shadow-md" key={post.id}>
                                <div>
                                    <p className="px-2 text-[16px] text-lime-700">Post {post.id}</p>
                                    <h4 className="px-2 my-2 text-[18px] text-lime-600 font-semibold leading-6">{post.title}</h4>
                                    <p className="px-2 py-4 text-[16px] bg-white">{post.body}</p>
                                </div>
                                <div>
                                    <h5 className="my-2 px-2  text-[16px] text-yellow-600 font-semibold">Comments:</h5>
                                    <ul className="px-2 grid grid-cols-3 gap-2">
                                        {
                                            comments
                                                .filter(comment => comment.postId === post.id)
                                                .map((comment) => (
                                                <li className="p-1 flex flex-col gap-1 bg-white rounded-md" key={comment.id}>
                                                    <p className="text-[16px] font-semibold">{comment.name}</p>
                                                    <p className="text-[16px] text-white bg-yellow-600">{comment.email}</p>
                                                    <p className="text-[14px]">{comment.body}</p>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};
