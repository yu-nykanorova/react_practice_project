import {useEffect, useState} from "react";
import type {IPostPlaceholder} from "../../../models/placeholder/post/IPostPlaceholder.ts";
import {itemsService} from "../../../services/api.service.ts";

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
        <ul>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            }
        </ul>
    );
};
