import {PostCard} from "./PostCard.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.ts";

export const PostsList = () => {
    const {posts, loadState, error} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(postSliceActions.loadPosts());
        }
    }, []);

    return (
        <>
            {loadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
            {loadState === "failed" && <p className="text-[20px] text-red-600">{error}</p>}
            <ul className="px-10 max-w-300 mx-auto grid grid-cols-2 gap-8">
                {
                    posts.map((post) => (
                        <PostCard key={post.id} post={post}/>
                    ))
                }
            </ul>
        </>
    );
};
