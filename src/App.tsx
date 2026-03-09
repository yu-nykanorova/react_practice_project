import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/api.service.ts";

function App() {

    useEffect(() => {
        getAllUsers().then(value => console.log(value));

        saveUser({id: 1, name: "John", email: "aaa@bb.ccc"}).then(value => console.log(value));
    }, []);

    return (
    <div className="bg-emerald-200">
      Hello!
    </div>
  );
}

export default App;
