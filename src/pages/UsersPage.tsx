import {UsersBranch} from "./UsersBranch.tsx";
import {PostsBranch} from "./PostsBranch.tsx";

export const UsersPage = () => {
    return (
        <div className="grid grid-cols-2 gap-x-10">
            <UsersBranch/>
            <PostsBranch/>
        </div>
    );
};
