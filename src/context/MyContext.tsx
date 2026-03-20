import type {IUser} from "../models/user/IUser.ts";
import {createContext} from "react";

type MyContextProps = {
    theme: "light" | "dark";
    toggleTheme: () => void;
    selectedUser: IUser | null;
    setSelectedUser: (user: IUser) => void;
};

const init: MyContextProps = {
    theme: "light",
    toggleTheme: () => {},
    selectedUser: null,
    setSelectedUser: () => {},
}

export const MyContext = createContext<MyContextProps>(init);
