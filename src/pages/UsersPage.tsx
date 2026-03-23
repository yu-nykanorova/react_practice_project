import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {Link} from "react-router-dom";

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
                    <Link className="block" to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
                ))
            }
        </ul>
    );
};
