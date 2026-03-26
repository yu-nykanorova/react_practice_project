import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import avatar from "../../assets/img/mockup_avatar.jpg";

export const UserItem = () => {
    const {id} = useParams();

    const {user, loadState, error} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(userSliceActions.loadUser(id))
        }
    }, [id]);

    return (
        <>
            {loadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
            {loadState === "failed" && <p className="text-[20px] text-red-600">{error}</p>}
            {
                user &&
                <div className="w-full px-10 flex justify-center items-center gap-8">
                    <div className="max-w-70 flex items-center justify-center rounded-md shadow-md">
                        <img className="rounded-md" src={avatar} alt={`${user.name}'s avatar`}/>
                    </div>
                    <div>
                        <p className="text-[20px] text-right">USER #{user.id}</p>
                        <h2 className="px-2 font-semibold text-[28px] text-yellow-600">{user.name}</h2>
                        <h3 className="px-2 text-[20px] self-center">({user.username})</h3>
                        <p className="w-full mt-1 px-2 text-[18px] font-semibold">Contacts:</p>
                        <p className="w-full px-2">Email: {user.email}</p>
                        <p className="w-full mb-1 px-2">Phone: {user.phone}</p>
                    </div>
                </div>
            }

        </>
    );
};
