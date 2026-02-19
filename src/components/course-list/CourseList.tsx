import {CourseItem} from "../course-item/CourseItem.tsx";
import {coursesArray} from "../../data/courses.ts";
import type {Course} from "../../models/courseModel.ts";

export const CourseList = () => {
    return (
        <ul className="max-w-200 mx-auto flex flex-col gap-4">
            {
                coursesArray.map((course: Course, index: number) => (
                    <CourseItem key={index} course={course}/>
                ))
            }
        </ul>
    );
};
