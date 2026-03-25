import {UserItemComplex} from "../components/users/UserItemComplex.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect, useMemo, useState} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";
import {commentSliceActions} from "../redux/slices/commentSlice/commentSlice.ts";
import type {IUser} from "../models/IUser.ts";

export const ComplexPage = () => {
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    const dispatch = useAppDispatch();

    const {users, loadState: userLoadState, error: userError} = useAppSelector(({userSlice}) => userSlice);
    const {posts, loadState: postLoadState, error: postError} = useAppSelector(({postSlice}) => postSlice);
    const {comments, loadState: commentLoadState, error: commentError} = useAppSelector(({commentSlice}) => commentSlice);

    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postSliceActions.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentSliceActions.loadComments());
        }
    }, []);

    const userPosts = useMemo(() =>
        selectedUser ?
            posts.filter(post => post.userId === selectedUser.id)
            : [],
    [selectedUser, posts]);

    const userPostsComments = useMemo(() =>
            selectedUser ?
                comments.filter(comment => userPosts.some(post => post.id === comment.postId))
                : [],
        [selectedUser, userPosts, comments]);

    return (
        <>
            <div>
                {userLoadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
                {userLoadState === "failed" && <p className="text-[20px] text-red-600">{userError}</p>}
                <ul>
                    {
                        users.map((user) => (
                            <p key={user.id}>{user.name}</p>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};
