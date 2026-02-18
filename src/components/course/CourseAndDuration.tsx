import type {FC} from 'react';
import type {ICourseAndDuration} from "../../models/CourseAndDuration.ts";

type Props = {
    course: ICourseAndDuration;
}

const CourseAndDuration: FC<Props> = ({course}) => {
    return (
        <li className="not-last:mb-2 border-b border-green-300 border-solid">
            <h2 className="text-lg">{course.title}</h2>
            <p className="text-gray-700">{`Course duration: ${course.monthDuration} month(s)`}</p>
        </li>
    );
};

export default CourseAndDuration;