import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser;
}

export const UserItem: FC<UserProps> = ({user}) => {
    return (
        <li className="p-2 text-slate-800 bg-slate-50 rounded-xl shadow-xl">
            <div className=" mb-2 flex justify-evenly items-center gap-6 border-b border-b-emerald-800">
                <div className="w-20">
                    <img src={user.image} alt={user.lastName} className="w-full"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[18px]">USER #{user.id}</p>
                    <h2 className="text-[22px] text-emerald-800 font-semibold">{user.firstName} {user.lastName}</h2>
                </div>
            </div>
            <div className="text-[18px]">
                <p>Age: {user.age}</p>
                <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                <p>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                <p>Company: {user.company.name}</p>
            </div>
        </li>
    );
};
