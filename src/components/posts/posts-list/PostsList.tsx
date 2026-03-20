import {useFetch} from "../../../hooks/useFetch.ts";
import type {IPostsObj} from "../../../models/post/IPostObj.ts";
import {PostItem} from "../post-item/PostItem.tsx";

const defaultPosts: IPostsObj = {
    posts: [],
    total: 0,
    skip: 0,
    limit: 0,
}

export const PostsList = () => {
    const {data, error} = useFetch<IPostsObj>("/posts", defaultPosts);

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
            {
                error ?
                    <p>{error}</p>
                    :
                    data.posts.map((post) => (
                        <PostItem key={post.id} post={post}/>
                    ))
            }
        </ul>
    );
};
