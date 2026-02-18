import './App.css'
import {coursesTitleArray} from "./data/coursesTitleList.ts";
import CourseTitle from "./components/course/CourseTitle.tsx";

function App() {
  return (
    <div className="h-screen p-8 flex justify-center items-center bg-indigo-400">
      <ul className="p-2 shadow-md bg-gray-600 rounded-sm">
        {
          coursesTitleArray.map((courseTitle, index) => <CourseTitle key={index} title={courseTitle}/>)
        }
      </ul>
    </div>
  );
}

export default App;
