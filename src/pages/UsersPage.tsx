import {UsersList} from "../components/users-list/UsersList.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const UsersPage = () => {
    return (
        <div>
            <h1 className="mb-6 font-semibold">Users List</h1>
            <UsersList/>
            <Pagination/>
        </div>
    );
};
