import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {
    const {counterValue, increment} = useContext(MyContext);

    const incrementValue = () => {
        increment(counterValue);
    }

    return (
        <div>
            <h2 className="my-2 text-lg">Right branch A</h2>
            <button onClick={incrementValue} className="py-1 px-2 bg-white rounded-md shadow-md">Click to increment counter</button>
        </div>
    );
};
