import {useFetch} from "../../../hooks/useFetch.ts";
import type {IUsersObj} from "../../../models/user/IUsersObj.ts";
import {UserItem} from "../user-item/UserItem.tsx";

const defaultUsers: IUsersObj = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
}

export const UsersList = () => {
    const {data, error} = useFetch<IUsersObj>("/users", defaultUsers);

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {
                error ?
                    <p>{error}</p>
                    :
                    data.users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))
            }
        </ul>
    );
};
