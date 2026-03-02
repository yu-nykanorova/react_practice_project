import {useEffect, useState} from "react";
import type {IUserDummy} from "../../../models/dummy/user/IUserDummy.ts";
import {itemsService} from "../../../services/api.service.ts";
import type {IUsersObj} from "../../../models/dummy/user/IUsersObj.ts";
import {UserItemDummy} from "../user-item/UserItemDummy.tsx";

export const UsersListDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        async function fetchData() {
            const usersObj = await itemsService.getAll<IUsersObj>("dummy", "users");
            setUsers(usersObj.users);
        }
        fetchData();
    }, []);

    return (
        <ul className="max-width grid grid-cols-1 gap-8">
            {
                users.map((user) => (
                    <UserItemDummy key={user.id} user={user}/>
                ))
            }
        </ul>
    );
};
