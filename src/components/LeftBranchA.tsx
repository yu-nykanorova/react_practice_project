import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext);

    return (
        <div>
            <h2 className="my-2 text-lg">Left branch A</h2>
            <p>Current counter value is: {counterValue}</p>
        </div>
    );
};
