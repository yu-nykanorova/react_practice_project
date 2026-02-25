import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import {PostComponent} from "../post/PostComponent.tsx";

type PostsComponentProps = {
    userId: string;
}

export const PostsComponent: FC<PostsComponentProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (userId) {
            postService.getAllPostsOfUserById(+userId)
                .then(posts => setPosts(posts));
        }
    }, [userId]);

    return (
        <div>
            {
                posts.map((post) => (
                    <PostComponent key={post.id} item={post}/>
                ))
            }
        </div>
    );
};
