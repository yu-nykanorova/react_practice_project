import {useEffect, useState} from "react";
import type {User} from "../../models/userModel.ts";
import {UserItem} from "./UserItem.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data));

        // async function fetchUsers() {
        //     const allUsers = await getUsers();
        //     setUsers(allUsers);
        // }
        //
        // fetchUsers();

    }, []);

    return (
        <>
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))
            }
        </>
    );
};
