import {useEffect, useState} from "react";
import type {IUserDummy} from "../../../models/dummy/user/IUserDummy.ts";
import {itemsService} from "../../../services/api.service.ts";
import type {IUsersObj} from "../../../models/dummy/user/IUsersObj.ts";

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
        <ul>
            {
                users.map((user) => (
                    <p key={user.id}>{user.eyeColor}</p>
                ))
            }
        </ul>
    );
};
