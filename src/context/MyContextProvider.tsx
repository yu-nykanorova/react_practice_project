import type {IUser} from "../models/user/IUser.ts";
import {type FC, type PropsWithChildren, useState} from "react";
import { MyContext } from "./MyContext";

export const MyContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <MyContext.Provider value={{
            theme,
            toggleTheme,
            selectedUser,
            setSelectedUser
        }}>
            {children}
        </MyContext.Provider>
    );
};