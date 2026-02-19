import './App.css';
import {useState} from "react";

function App() {
let [counter, setCounter] = useState(0);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-amber-100">
        <p className="w-100 mx-auto mb-4 p-4 text-gray-700 text-4xl text-center border-2 border-solid border-indigo-500 rounded-md">{counter}</p>
        <div className="w-100 mx-auto flex justify-between items-center gap-6">
            <button onClick={() => {
                setCounter(++counter);
            }} className="px-4 py-2 bg-indigo-500 shadow-xl rounded-md text-white">Increment</button>
            <button onClick={() => {
                setCounter(prevState => {
                    return --prevState;
                });
            }} className="px-4 py-2 bg-indigo-500 shadow-xl rounded-md text-white">Decrement</button>
        </div>
    </div>
  );
}

export default App;
