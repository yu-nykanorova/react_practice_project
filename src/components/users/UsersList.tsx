import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {UserItem} from "./UserItem.tsx";

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
            {loadState === "loading" && <div>Loading</div>}
            {loadState === "failed" && <div>{error}</div>}
            <ul className="px-4 max-w-300 mx-auto grid grid-cols-2 gap-8">
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </ul>
        </>
    );
};
