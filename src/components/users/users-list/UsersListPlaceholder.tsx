import {useEffect, useState} from "react";
import type {IUserPlaceholder} from "../../../models/placeholder/user/IUserPlaceholder.ts";
import {itemsService} from "../../../services/api.service.ts";
import {UserItemPlaceholder} from "../user-item/UserItemPlaceholder.tsx";

export const UsersListPlaceholder = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([]);

    useEffect(() => {
        async function fetchData() {
            const users = await itemsService.getAll<IUserPlaceholder[]>("placeholder", "users");
            setUsers(users);
        }
        fetchData();
    }, []);

    return (
        <ul className="grid-2-list">
            {
                users.map((user) => (
                    <UserItemPlaceholder key={user.id} user={user}/>
                ))
            }
        </ul>
    );
};
