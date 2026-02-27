import {SourceMenu} from "../../components/menu/SourceMenu.tsx";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
            <h2>COMMENTS</h2>
            <SourceMenu/>
            <Outlet/>
        </>
    );
};