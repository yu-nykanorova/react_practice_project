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
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);

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

    const handleUserClick = (user: IUser) => {
        setSelectedUser(user);
    };

    return (
        <>
            <div>
                {userLoadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
                {userLoadState === "failed" && <p className="text-[20px] text-red-600">{userError}</p>}
                <h1 className="mb-4 text-[26px]">Click any user to show details</h1>
                <ul className="px-10 py-6 max-w-300 mx-auto grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 border-y border-lime-600">
                    {
                        users.map((user) => (
                            <li
                                key={user.id}
                                className={`p-1 flex justify-center items-center text-[20px] shadow-md rounded-md cursor-pointer transition-all duration-200 hover:bg-lime-600 hover:text-white ${user.id === selectedUser?.id ? "bg-lime-600 text-white": "bg-white text-[initial]"}`}
                                onClick={() => handleUserClick(user)}
                            >
                                {user.name}
                            </li>
                        ))
                    }
                </ul>
                {
                    selectedUser && (
                        <UserItemComplex
                            user={selectedUser}
                            posts={userPosts}
                            comments={comments}
                        />
                    )
                }
            </div>
        </>
    );
};
