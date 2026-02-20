import {useEffect, useState} from "react";
import type {User} from "../../models/userModel.ts";
import {UserItem} from "./UserItem.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [item, setItem] = useState<User | null>(null);

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    const showUserInfo = (item: User): void => {
        setItem(item);
    }

    return (
        <div className="w-200">
            <ul className="mb-8 flex flex-col gap-2">
                {
                    users.map((user) => (
                        <UserItem showUserInfo={showUserInfo} key={user.id} user={user}/>
                    ))
                }
            </ul>
            <h3 className="mb-4 text-2xl">User info</h3>
            {
                !item ?
                    <p className="text-xl">Click button "Details" to view user contacts</p>
                    :
                   <div className="text-xl">
                        <p className="font-semibold">Email: <span className="font-normal">{item.email}</span></p>
                        <p className="font-semibold">Phone: <span className="font-normal">{item.phone}</span></p>
                        <p className="font-semibold">Website: <span className="font-normal">{item.website}</span></p>
                    </div>
            }
        </div>
    );
};
