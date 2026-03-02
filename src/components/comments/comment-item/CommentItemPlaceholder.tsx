import type {FC} from "react";
import type {ICommentPlaceholder} from "../../../models/placeholder/comment/ICommentPlaceholder.ts";

type CommentProps = {
    comment: ICommentPlaceholder;
};

export const CommentItemPlaceholder: FC<CommentProps> = ({comment}) => {

    const title = comment.name.charAt(0).toUpperCase() + comment.name.slice(1);

    return (
        <li className="item-card">
            <p className="w-full p-4 text-[28px] text-right font-semibold text-black bg-indigo-200 rounded-t-xl">Comment: {comment.id}</p>
            <p className="w-full p-2 text-[24px] font-semibold text-right">Post {comment.postId}</p>
            <p className="px-6 text-[22px] font-semibold">Author: {comment.email}</p>
            <h3 className="header-medium">{title}</h3>
            <p className="pb-8 text-common">{comment.body}</p>
        </li>
    );
};
