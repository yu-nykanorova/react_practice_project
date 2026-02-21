import type {FC} from "react";
import type {IComment} from "../models/commentModel.ts";

type CommentComponentProps = {
    comment: IComment;
}

export const CommentComponent: FC<CommentComponentProps> = ({comment}) => {
    return (
        <li className="p-4 flex flex-col gap-2 bg-gray-100 rounded-sm shadow-md">
            <p className="text-xl text-right font-semibold text-purple-950">Post {comment.postId}</p>
            <p className="text-xl text-right font-semibold text-purple-950">Comment {comment.id}</p>
            <h2 className="text-2xl text-purple-800">{(comment.name).toUpperCase()}</h2>
            <p className="text-lg text-blue-700">From: {comment.email}</p>
            <p className="text-lg">{(comment.body)[0].toUpperCase() + (comment.body).slice(1)}</p>
        </li>
    );
};
