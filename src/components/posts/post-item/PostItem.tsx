import type {FC} from "react";
import type {IPost} from "../../../models/post/IPost.ts";

type PostProps = {
    post: IPost;
}

export const PostItem: FC<PostProps> = ({post}) => {
    return (
        <li>
            <h2>{post.title}</h2>
        </li>
    );
};
