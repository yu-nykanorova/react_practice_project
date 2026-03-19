import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {
    const hundred = useMemo(() => {
        for (let i = 0; i < 100; i++) {
            console.log(i);
        }
        return null;
    }, []);

    return (
        <>
            <p className="my-2 text-xl">LeftBranch</p>
            <LeftBranchA/>
        </>
    );
};
