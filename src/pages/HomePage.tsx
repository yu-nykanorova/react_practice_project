import {Outlet} from "react-router-dom";
import {UsersList} from "../components/users/UsersList.tsx";

export const HomePage = () => {
    return (
        <>
            <h1 className="mb-6 text-xl">Users</h1>
            <div className="max-h-screen w-full px-8 pb-6 flex gap-4">
                <UsersList/>
                <Outlet/>
            </div>
        </>
    );
};
