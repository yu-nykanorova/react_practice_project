import {UserItem} from "../user-item/UserItem.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsersService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "../pagination/Pagination.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [query] = useSearchParams({page: "1"});

    const currentPage = query.get("page") || "1";

    useEffect(() => {
        async function fetchData() {
            const responseObj = await getUsersService(currentPage);
            setUsers(responseObj.users);
            setTotal(responseObj.total);
        }
        fetchData();
    }, [currentPage]);
    
    return (
        <div>
            <ul className="p-4 w-full grid grid-cols-2 gap-4">
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </ul>
            <Pagination total={total}/>
        </div>
    );
};
