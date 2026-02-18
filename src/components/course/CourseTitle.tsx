import type {FC} from 'react';
import type {CourseTitleType} from "../../models/CourseTitle.ts";

type Props = {
    title: CourseTitleType;
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