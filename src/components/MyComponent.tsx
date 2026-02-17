// functional component, using rsc

import type {FC, ReactNode} from 'react';

type MyComponentPropType = {
    title: string;
    children?: ReactNode;
};

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className="mt-7 mx-auto max-w-200 p-4 flex flex-col justify-center items-center">
            <h2 className="p-1 bg-red-200">{ title }</h2>
            <p className="text-amber-950 text-center">{ children }</p>
        </div>
    );
};

export default MyComponent;

// or

// type MyComponentPropType = { text: string };
//
// function MyComponent({text}: MyComponentPropType) {
//     return <div>{text}</div>
// }
//
// export default MyComponent;