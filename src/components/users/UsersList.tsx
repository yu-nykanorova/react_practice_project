import {useEffect, useState} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {itemsService} from "../../services/api.service.ts";
import type {IUsersObj} from "../../models/user/IUsersObj.ts";
import {UserItem} from "./UserItem.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        async function fetchData() {
            const usersObj = await itemsService.getAll<IUsersObj>("users");
            setUsers(usersObj.users);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid grid-cols-1 gap-8">
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))
            }
        </ul>
    );
};
