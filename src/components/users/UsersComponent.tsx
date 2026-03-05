import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import {UserComponent} from "../user/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get("pg");
        getUsers(pg || "1").then(result => setUsers(result.data));
    }, [query]);

    return (
        <>
            {
                users.map((user) => (
                    <UserComponent key={user.id} user={user} />
                ))
            }
        </>
    );
};
