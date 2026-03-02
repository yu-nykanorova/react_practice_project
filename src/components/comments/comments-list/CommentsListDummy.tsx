import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../../models/dummy/comment/ICommentDummy.ts";
import {itemsService} from "../../../services/api.service.ts";
import type {ICommentsObj} from "../../../models/dummy/comment/ICommentsObj.ts";

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
        <ul>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        {comment.body}
                    </div>
                ))
            }
        </ul>
    );
};
