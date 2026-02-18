import './App.css';
import {coursesAndDurationArray} from "./data/coursesAndDurationList.ts";
import CourseAndDuration from "./components/course/CourseAndDuration.tsx";


function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-[url(/public/bg.jpg)] bg-cover bg-no-repeat">
      <ul className="p-6 bg-gray-50 rounded-s shadow-xl">
        {
          coursesAndDurationArray.map((course, index) => <CourseAndDuration key={index} course={course}/>)
        }
      </ul>
    </div>
  );
}

export default App;
