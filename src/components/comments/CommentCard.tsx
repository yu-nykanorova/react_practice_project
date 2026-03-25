import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentProps = {
    comment: IComment;
};

export const CommentCard: FC<CommentProps> = ({comment}) => {
    return (
        <li className="flex flex-col items-start gap-2 bg-white rounded-xl shadow-md">
            <p className="px-6 py-2 text-[18px]"><span className=" text-yellow-600 font-semibold">Comment {comment.id}</span> (post {comment.postId})</p>
            <p className="px-6 text-[18px]">{comment.email}</p>
            <h2 className="w-full px-6 py-2 text-white text-[22px] bg-yellow-600 leading-7">{comment.name}</h2>
            <p className="px-6 py-2 text-[18px]">{comment.body}</p>
        </li>
    );
};
