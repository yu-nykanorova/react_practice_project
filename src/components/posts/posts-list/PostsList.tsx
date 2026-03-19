import {useFetch} from "../../../hooks/useFetch.ts";
import type {IPostsObj} from "../../../models/post/IPostObj.ts";
import {PostItem} from "../post-item/PostItem.tsx";

export const PostsList = () => {
    const {data, error} = useFetch<IPostsObj>("/posts");

    return (
        <ul>
            {
                error ?
                    <p>{error}</p>
                    :
                    data?.posts.map((post) => (
                        <PostItem key={post.id} post={post}/>
                    ))
            }
        </ul>
    );
};
