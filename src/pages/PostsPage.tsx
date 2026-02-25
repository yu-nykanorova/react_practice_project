import {PostsComponent} from "../components/posts/PostsComponent.tsx";
import {useParams} from "react-router-dom";

export const PostsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {
                userId && <PostsComponent userId={userId}/>
            }
        </div>
    );
};
