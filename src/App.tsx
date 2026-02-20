import './App.css'
import {TodoComponents} from "./components/TodoComponents.tsx";

function App() {

  return (
    <div className="px-4 py-8 flex flex-col items-center justify-center bg-amber-100">
      <TodoComponents/>
    </div>
  );
}

export default App;
