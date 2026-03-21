import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const UsersPage = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(value => {
            dispatch(userSliceActions.loadUsers(value));
        })
    }, []);

    return (
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    );
};
