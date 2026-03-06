import './App.css'
import {FormComponent} from "./components/FormComponent.tsx";
import {FormComponentHook} from "./components/FormComponentHook.tsx";

function App() {

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-20 bg-amber-200">
        <FormComponent/>
        <FormComponentHook/>
    </div>
  );
}

export default App;
