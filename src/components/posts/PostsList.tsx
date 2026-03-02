import {useEffect, useState} from "react";
import {itemsService} from "../../services/api.service.ts";
import type {IPost} from "../../models/posts/IPost.ts";
import type {IPostsObj} from "../../models/posts/IPostsObj.ts";
import {PostItem} from "./PostItem.tsx";

export const PostsList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        async function fetchData() {
            const postsObj = await itemsService.getAll<IPostsObj>("posts");
            setPosts(postsObj.posts);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid-2-list">
            {
                posts.map((post) => (
                    <PostItem key={post.id} post={post}/>
                ))
            }
        </ul>
    );
};
