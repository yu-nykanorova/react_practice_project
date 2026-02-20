import type {User} from "../../models/userModel.ts";

type UserItemProps = {
    user: User;
}

export const UserItem = ({user}: UserItemProps) => {
    return (
        <h2 className="text-gray-600 text-3xl duration-300 ease-in-out cursor-pointer hover:text-blue-700">{user.name}</h2>
    );
};
