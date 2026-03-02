import {useEffect, useState} from "react";
import type {IPostPlaceholder} from "../../../models/placeholder/post/IPostPlaceholder.ts";
import {itemsService} from "../../../services/api.service.ts";
import {PostItemPlaceholder} from "../post-item/PostItemPlaceholder.tsx";

export const PostsListPlaceholder = () => {
    const [posts, setPosts] = useState<IPostPlaceholder[]>([]);

    useEffect(() => {
        async function fetchData() {
            const posts = await itemsService.getAll<IPostPlaceholder[]>("placeholder", "posts");
            setPosts(posts);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid-2-list">
            {
                posts.map((post) => (
                    <PostItemPlaceholder key={post.id} post={post}/>
                ))
            }
        </ul>
    );
};
