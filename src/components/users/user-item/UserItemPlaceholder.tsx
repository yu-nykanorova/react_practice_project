import type {FC} from "react";
import type {IUserPlaceholder} from "../../../models/placeholder/user/IUserPlaceholder.ts";

type UserProps = {
    user: IUserPlaceholder;
}

export const UserItemPlaceholder: FC<UserProps> = ({user}) => {
    return (
        <li className="flex flex-col items-start gap-2">
            <p className="text-[18px]">USER #{user.id}</p>
            <h2>{user.name}</h2>
            <h3>({user.username})</h3>
            <p>Contacts:</p>
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <p>Address:</p>
            <p>{user.address.suite}, {user.address.street}</p>
            <p>{user.address.zipcode} {user.address.city}</p>
            <p>Location:</p>
            <p>latitude: {user.address.geo.lat}</p>
            <p>longitude: {user.address.geo.lng}</p>
            <p>Website: {user.website}</p>
            <p>Company:</p>
            <h3>"{user.company.name}"</h3>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
        </li>
    );
};
