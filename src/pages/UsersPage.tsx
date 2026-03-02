import {UsersList} from "../components/users/UsersList.tsx";

export const UsersPage = () => {
    return (
        <>
            <h1 className="mb-4 text-4xl font-semibold">Users List</h1>
            <UsersList/>
        </>
    );
};