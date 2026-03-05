import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./components/users/UsersComponent.tsx";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-amber-100">
        <UsersComponent/>
        <PaginationComponent/>
    </div>
  );
}

export default App;
