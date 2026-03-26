import './App.css'
import {useGetUsers} from "./api/query/useGetUsers.ts";

function App() {

    const {
        data: users = [],
        isFetching,
        status
    } = useGetUsers();

    console.log(users, status);

    if (isFetching) return <div>Loading...</div>

    return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
        <div className="p-6 bg-white shadow-xl rounded-sm">
            {
            users.map((user) => (
                <div key={user.id}>
                    {user.id} - {user.name}
                </div>
            ))
        }
        </div>
    </div>
  );
}

export default App;
