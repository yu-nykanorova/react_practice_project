import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../../models/dummy/comment/ICommentDummy.ts";
import {itemsService} from "../../../services/api.service.ts";
import type {ICommentsObj} from "../../../models/dummy/comment/ICommentsObj.ts";
import {CommentItemDummy} from "../comment-item/CommentItemDummy.tsx";

export const CommentsListDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        async function fetchData() {
            const commentsObj = await itemsService.getAll<ICommentsObj>("dummy", "comments");
            setComments(commentsObj.comments);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid grid-cols-1 gap-8">
            {
                comments.map((comment) => (
                    <CommentItemDummy key={comment.id} comment={comment}/>
                ))
            }
        </ul>
    );
};
