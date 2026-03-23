import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {Link} from "react-router-dom";

export const UsersPage = () => {
    const {users, loadState, error} = useAppSelector(({userSlice}) => userSlice);
    //const users = useAppSelector(state => state.userSlice.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(userSliceActions.loadUsers());
        }
    }, []);

    return (
        <ul>
            {loadState === "loading" && <div>Loading</div>}
            {loadState === "failed" && <div>{error}</div>}
                        {
                users.map((user) => (
                    <Link className="block" to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
                ))
            }
        </ul>
    );
};
