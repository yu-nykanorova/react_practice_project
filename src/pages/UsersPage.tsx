import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const UsersPage = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);
    //const users = useAppSelector(state => state.userSlice.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <ul>
            {!loadState && <div>Loading</div>}

            {
                users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    );
};
