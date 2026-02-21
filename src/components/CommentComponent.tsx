import type {FC} from "react";
import type {IComment} from "../models/commentModel.ts";

type CommentComponentProps = {
    comment: IComment;
}

export const CommentComponent: FC<CommentComponentProps> = ({comment}) => {
    return (
        <li className="p-4 flex flex-col bg-gray-100 rounded-sm shadow-md">
            <p className="text-xl text-right font-semibold text-purple-950">Post {comment.postId}</p>
            <p className="text-xl text-right font-semibold text-purple-950">Comment {comment.id}</p>
            <p className="text-xl text-blue-700">From user: {comment.user.id} <span className="font-semibold">({comment.user.username})</span></p>
            <p className="mb-4 text-xl text-purple-800">{comment.user.fullName}</p>
            <p className="text-xl">{comment.body}</p>
        </li>
    );
};