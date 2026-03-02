import type {FC} from "react";
import type {ICommentDummy} from "../../../models/dummy/comment/ICommentDummy.ts";

type CommentProps ={
    comment: ICommentDummy;
};

export const CommentItemDummy: FC<CommentProps> = ({comment}) => {
    return (
        <li className="item-card">
            <p className="w-full p-4 text-[28px] text-right font-semibold text-black bg-indigo-200 rounded-t-xl">Comment: {comment.id}</p>
            <p className="w-full px-4 py-1 text-[24px] font-semibold text-right">Post {comment.postId}</p>
            <p className="w-full px-6 py-1 text-left text-[24px] text-green-600">Likes: {comment.likes}</p>
            <p className="w-full px-6 py-1 text-left text-[24px]"> User id: {comment.user.id} - {comment.user.fullName} ({comment.user.username})</p>
            <h3 className="px-6 pb-8 text-[26px] font-semibold">{comment.body}</h3>
        </li>
    );
};
