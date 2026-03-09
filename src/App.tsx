import './App.css'
import {FormComponent} from "./components/FormComponent.tsx";
import {FormComponentHook} from "./components/FormComponentHook.tsx";
import {FormComponentJoi} from "./components/FormComponentJoi.tsx";

function App() {

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-20 bg-slate-300">
        <FormComponent/>
        <FormComponentHook/>
        <FormComponentJoi/>
    </div>
  );
}

export default App;
