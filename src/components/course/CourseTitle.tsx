import type {FC} from 'react';

type Props = {
    title: string;
}

const CourseTitle: FC<Props> = ({title}) => {
    return (
        <li>
            <a href="#" className="text-white">
                { title }
            </a>
        </li>
    );
};

export default CourseTitle;