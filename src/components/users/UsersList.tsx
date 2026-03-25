import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {UserCard} from "./UserCard.tsx";

export const UsersList = () => {
    const {users, loadState, error} = useAppSelector(({userSlice}) => userSlice);
    //const users = useAppSelector(state => state.userSlice.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(userSliceActions.loadUsers());
        }
    }, []);

    return (
        <>
            {loadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
            {loadState === "failed" && <p className="text-[20px] text-red-600">{error}</p>}
            <ul className="px-10 max-w-300 mx-auto grid grid-cols-2 gap-8">
                {
                    users.map((user) => (
                        <UserCard key={user.id} user={user}/>
                    ))
                }
            </ul>
        </>
    );
};
