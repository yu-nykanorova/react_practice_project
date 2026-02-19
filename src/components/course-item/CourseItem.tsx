import type {Course} from "../../models/courseModel.ts";
import {ModuleItem} from "./ModuleItem.tsx";

type CourseItemProps = {
    course: Course;
}

export const CourseItem = ({course}: CourseItemProps) => {
    return (
        <li className="h-100 grid grid-cols-2 rounded-lg shadow-xl">
            <div className="flex flex-col justify-center items-center gap-3 bg-amber-50 rounded-l-lg">
                <h3 className="text-3xl text-gray-800 font-semibold">{course.title}</h3>
                <p className="text-2xl">{course.monthDuration} month(s)</p>
                <p className="text-2xl">{course.hourDuration} hour(s)</p>
            </div>
            <ul className="flex flex-col justify-center items-center bg-gray-800 text-amber-50 text-xl rounded-r-lg">
                {
                    course.modules.map((module, index) => (
                        <ModuleItem key={index} module={module}/>
                    ))
                }
            </ul>
        </li>
    );
};
