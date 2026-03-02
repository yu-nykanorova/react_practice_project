import {useEffect, useState} from "react";
import type {ICommentPlaceholder} from "../../../models/placeholder/comment/ICommentPlaceholder.ts";
import {itemsService} from "../../../services/api.service.ts";

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
        <ul>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        {
                            comment.body
                        }
                    </div>
                ))
            }
        </ul>
    );
};
