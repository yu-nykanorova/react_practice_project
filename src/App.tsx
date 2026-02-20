import './App.css';
import {UsersList} from "./components/user/UsersList.tsx";

function App() {

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2 bg-amber-100">
        <UsersList />
    </div>
  );
}

export default App;
