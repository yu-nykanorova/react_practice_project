import type {User} from "../../models/userModel.ts";

type UserItemProps = {
    user: User;
    foo: (item: User) => void;
}

export const UserItem = ({user, foo}: UserItemProps) => {
    return (
        <li className="flex justify-between items-cente gap-2">
            <h2 className="text-gray-600 text-3xl duration-300 ease-in-out cursor-pointer hover:text-blue-700">{user.name}</h2>
            <button onClick={() => {
                foo(user);
            }} className="px-2 py-1 border-solid border-2 border-indigo-500 rounded-xs duration-300 ease-in-out hover:bg-white">Details</button>
        </li>
    );
};
