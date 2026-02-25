import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import {useNavigate} from "react-router-dom";

type PostComponentProps = {
    item: IPost;
}

export const PostComponent: FC<PostComponentProps> = ({item}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("details", {state: item});
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <button onClick={handleOnClick}>Details</button>
        </div>
    );
};
