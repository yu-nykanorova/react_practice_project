import {Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <div className="min-h-screen max-w-300 w-full mx-auto px-8 pb-8 ">
                <Outlet/>
            </div>
        </>
    );
};
