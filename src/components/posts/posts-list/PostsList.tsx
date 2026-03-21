import {useFetch} from "../../../hooks/useFetch.ts";
import type {IPostsObj} from "../../../models/post/IPostObj.ts";
import {PostItem} from "../post-item/PostItem.tsx";
import {useContext} from "react";
import {MyContext} from "../../../context/MyContext.tsx";

const defaultPosts: IPostsObj = {
    posts: [],
    total: 0,
    skip: 0,
    limit: 0,
}

export const PostsList = () => {
    const {selectedUser} = useContext(MyContext);

    const url = selectedUser
        ? `/users/${selectedUser?.id}/posts`
        : "";

    const {data, error} = useFetch<IPostsObj>(url, defaultPosts);

    if (!selectedUser) {
        return <p className="text-xl text-yellow-600">Select user to see posts</p>
    }

    if (error) {
        return <p className="text-xl text-red-600">{error}</p>
    }

    if (!data || !data.posts) {
        return <p className="text-xl text-yellow-600">Loading...</p>
    }

    if (data.posts.length === 0) {
        return <p className="text-xl text-yellow-600">User {selectedUser.id} ({selectedUser.firstName} {selectedUser.lastName}) hasn't posts</p>
    }

    return (
        <ul className="h-screen px-2 grid grid-cols-1 gap-4 content-start overflow-y-auto">
            {
                data.posts.map((post) => (
                    <PostItem key={post.id} post={post}/>
                ))
            }
        </ul>
    );
};
