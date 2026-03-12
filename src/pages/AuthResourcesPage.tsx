import {Outlet} from "react-router-dom";
import {ResourcesMenu} from "../components/menu/ResourcesMenu.tsx";

export const AuthResourcesPage = () => {

    return (
        <>
            <ResourcesMenu/>
            <Outlet/>
        </>
    );
};
