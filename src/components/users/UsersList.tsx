import {useEffect, useState} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {UserItem} from "./UserItem.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        async function fetchData() {
            const usersObj = await userService.getAllUsers();
            setUsers(usersObj.users);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="mb-6 text-xl text-white">Users List</h1>
            <ul className="p-2 mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </ul>
        </>
    );
};
