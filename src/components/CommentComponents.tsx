import {useEffect, useState} from "react";
import type {IComment} from "../models/commentModel.ts";
import {CommentComponent} from "./CommentComponent.tsx";
import {getComments} from "../services/api.services.ts";

export const CommentComponents = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(data => setComments(data));
    }, []);

    return (
        <>
            <h1 className="mb-8 text-4xl text-center text-gray-800">Comments List</h1>
            <ul className="max-w-300 mx-auto grid grid-cols-2 gap-6">
                {
                    comments.map((comment) => (
                        <CommentComponent key={comment.id} comment={comment}/>
                    ))
                }
            </ul>
        </>
    );
};
