import {useLocation} from "react-router-dom";
import type {IUser} from "../models/IUser.ts";

export const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <>
            {user.address.city}
        </>
    );
};
