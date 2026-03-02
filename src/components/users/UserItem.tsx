import type {FC} from "react";
import type {IUser} from "../../models/user/IUser.ts";

type UserProps = {
    user: IUser;
};

export const UserItem: FC<UserProps> = ({user}) => {
    return (
        <li className="item-card">
            <p className="w-full px-6 py-2 text-white text-[22px] text-right bg-teal-600 rounded-t-xl">USER #{user.id}</p>
            <div className="flex justify-between items-center border-b border-b-purple-950">
                <div className="w-1/3">
                    <img className="w-full" src={user.image} alt={`${user.firstName} ${user.firstName}`}/>
                </div>
                <div>
                    <h2 className="font-semibold self-center">
                        {user.firstName}
                        {user.lastName}
                        {
                            user.maidenName &&
                            <span> ({user.maidenName})</span>
                        }
                    </h2>
                    <h3 className="text-[24px] self-center">(username: {user.username}, pass: {user.password})</h3>
                    <p className="flex justify-evenly items-center text-common">{user.gender}, {user.age} y.o.</p>
                    <p className="p-2 w-full text-[26px] font-semibold bg-teal-100">Role: {user.role}</p>
                    <p className="w-full px-6 text-[26px] text-center">ip: {user.ip}</p>
                    <p className="w-full px-6 text-[26px] text-center">mac: {user.macAddress}</p>
                    <p className="w-full px-6 pb-2 text-[24px] text-center"><span
                        className="font-semibold">User agent:</span> {user.userAgent}
                    </p>
                </div>
            </div>
            <div className="grid grid-2-list">
                <div>
                    <p className="header-medium">Personal info:</p>
                    <p className="p-1 text-common">Birth date: {user.birthDate}</p>
                    <p className="p-1 text-common">Blood group: {user.bloodGroup}</p>
                    <p className="p-1 text-common">Height: {user.height}</p>
                    <p className="p-1 text-common">Weight: {user.weight}</p>
                    <p className="p-1 text-common">Eyes: {user.eyeColor}</p>
                    <p className="p-1 text-common">Hair: {user.hair.color}, {user.hair.type}</p>
                    <p className="header-medium">Contacts:</p>
                    <p className="p-1 text-common">Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                    <p className="p-1 text-common">Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                    <p className="header-medium">Address:</p>
                    <p className="p-1 text-common">{user.address.address}</p>
                    <p className="p-1 text-common">{user.address.postalCode} {user.address.city}, {user.address.state}</p>
                    <p className="p-1 text-common">{user.address.stateCode} {user.address.country}</p>
                    <p className="header-medium">Location:</p>
                    <p className="p-1 text-common">latitude: {user.address.coordinates.lat}</p>
                    <p className="p-1 text-common">longitude: {user.address.coordinates.lng}</p>
                    <p className="header-medium">University:</p>
                    <p className="px-6 py-1 text-[26px] text-teal-900 font-semibold text-left">{user.university}</p>
                </div>
                <div>
                    <p className="header-medium">Bank info:</p>
                    <p className="p-1 text-common">Card No: {user.bank.cardNumber}</p>
                    <p className="p-1 text-common">Expire date: {user.bank.cardExpire}</p>
                    <p className="p-1 text-common">Type: {user.bank.cardType}</p>
                    <p className="p-1 text-common">Currency: {user.bank.currency}</p>
                    <p className="p-1 text-common">IBAN: {user.bank.iban}</p>
                    <p className="p-1 text-common">Coin: {user.crypto.coin}</p>
                    <p className="p-1 text-common">Coin wallet: {user.crypto.wallet}</p>
                    <p className="p-1 text-common">Crypto network: {user.crypto.network}</p>
                    <p className="p-1 text-common">EIN: {user.ein}</p>
                    <p className="p-1 text-common">SSN: {user.ssn}</p>
                    <p className="header-medium">Company:</p>
                    <h3 className="px-6 py-2 text-[26px] text-teal-900 font-semibold text-left">{user.company.name}</h3>
                    <p className="p-1 text-common">{user.company.department} Dept.</p>
                    <p className="p-1 text-common">{user.company.title}</p>
                    <p className="header-medium">Company address:</p>
                    <p className="p-1 text-common">{user.company.address.address}</p>
                    <p className="p-1 text-common">{user.company.address.postalCode} {user.company.address.city}, {user.company.address.state}</p>
                    <p className="p-1 text-common">{user.company.address.stateCode} {user.company.address.country}</p>
                    <p className="header-medium">Company location:</p>
                    <p className="p-1 text-common">latitude: {user.company.address.coordinates.lat}</p>
                    <p className="pb-2 pt-1 text-common">longitude: {user.company.address.coordinates.lng}</p>
                </div>
            </div>
        </li>
    );
};
