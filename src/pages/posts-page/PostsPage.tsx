import {SourceMenu} from "../../components/menu/SourceMenu.tsx";
import {Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <h2>POSTS</h2>
            <SourceMenu/>
            <Outlet/>
        </div>
    );
};