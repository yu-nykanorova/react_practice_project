import {SourceMenu} from "../../components/menu/SourceMenu.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <h2>USERS</h2>
            <SourceMenu/>
            <Outlet/>
        </>
    );
};