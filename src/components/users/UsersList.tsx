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
            <ul className="p-2 flex-[0_0_50%] mx-auto grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 overflow-y-auto">
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </ul>
        </>
    );
};
