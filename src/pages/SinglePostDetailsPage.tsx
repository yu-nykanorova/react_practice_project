import {useLocation} from "react-router-dom";
import type {IPost} from "../models/IPost.ts";

export const SinglePostDetailsPage = () => {
    const {state} = useLocation();
    const post = state as IPost;
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};
