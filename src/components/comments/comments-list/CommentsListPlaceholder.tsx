import {useEffect, useState} from "react";
import type {ICommentPlaceholder} from "../../../models/placeholder/comment/ICommentPlaceholder.ts";
import {itemsService} from "../../../services/api.service.ts";
import {CommentItemPlaceholder} from "../comment-item/CommentItemPlaceholder.tsx";

export const CommentsListPlaceholder = () => {
    const [comments, setComments] = useState<ICommentPlaceholder[]>([]);

    useEffect(() => {
        async function fetchData() {
            const comments = await itemsService.getAll<ICommentPlaceholder[]>("placeholder", "comments");
            setComments(comments);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid grid-cols-1 gap-8">
            {
                comments.map((comment) => (
                    <CommentItemPlaceholder key={comment.id} comment={comment}/>
                ))
            }
        </ul>
    );
};
