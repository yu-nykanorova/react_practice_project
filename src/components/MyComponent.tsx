// functional component, using rsc

import type {FC} from 'react';
import "./MyComponent.css";

type MyComponentPropType = { text: string };

const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div className="my-component">
            {text}
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