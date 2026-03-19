import {useFetch} from "../../../hooks/useFetch.ts";
import type {IUsersObj} from "../../../models/user/IUsersObj.ts";
import {UserItem} from "../user-item/UserItem.tsx";

export const UsersList = () => {
    const {data, error} = useFetch<IUsersObj>("/users");

    return (
        <ul>
            {
                error ?
                    <p>{error}</p>
                    :
                    data?.users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))
            }
        </ul>
    );
};