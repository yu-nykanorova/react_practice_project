import {useEffect, useState} from "react";
import type {IPostDummy} from "../../../models/dummy/post/IPostDummy.ts";
import {itemsService} from "../../../services/api.service.ts";
import type {IPostsObj} from "../../../models/dummy/post/IPostsObj.ts";
import {PostItemDummy} from "../post-item/PostItemDummy.tsx";

export const PostsListDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        async function fetchData() {
            const postsObj = await itemsService.getAll<IPostsObj>("dummy", "posts");
            setPosts(postsObj.posts);
        }
        fetchData();
    }, [])

    return (
        <ul className="max-width grid-2-list">
            {
                posts.map((post) => (
                    <PostItemDummy key={post.id} post={post}/>
                ))
            }
        </ul>
    );
};
