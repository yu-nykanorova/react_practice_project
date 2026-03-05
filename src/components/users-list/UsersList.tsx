import {UserItem} from "../user-item/UserItem.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsersService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    const limit = query.get("limit") || "10";
    const skip = query.get("skip") || "0";

    useEffect(() => {
        async function fetchData() {
            const responseObj = await getUsersService(limit, skip);
            setUsers(responseObj.users);
        }
        fetchData();
    }, [limit, skip]);
    
    return (
        <ul className="w-full grid grid-cols-2 gap-8">
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))
            }
        </ul>
    );
};
