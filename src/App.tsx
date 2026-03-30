import './App.css'
import {useGetUsers} from "./api/query/users/useGetUsers.ts";
import {useGetUser} from "./api/query/users/useGetUser.ts";
import {useCreatePost} from "./api/mutations/posts/useCreatePost.ts";
import {useState} from "react";

function App() {
    const [postTitle, setPostTitle] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");

    const {
        data: users = [],
        isFetching,
        status
    } = useGetUsers();

    const {
        data: user,
        isFetching: isUserLoading,
        status: userStatus
    } = useGetUser({userId: String(1)});

    const {mutateAsync, data: post} = useCreatePost();

    console.log(users, status);
    console.log(user, isUserLoading, userStatus);

    const handleCreatePost = async(userId: string) => {
        try {
            const response = await mutateAsync({userId, body: postBody, title: postTitle});
            if (response) {
                console.log(response);
                return;
            }
            console.log("No response");
        } catch (error) {
            console.error(error)
        }
    }

    if (isFetching) return <div>Loading...</div>

    return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
        <div className="max-w-300 w-full p-6 bg-white shadow-xl rounded-sm">
            {
                users.map((user) => (
                    <div className="p-2 flex items-center justify-between text-[22px]" key={user.id}>
                        {user.id} - {user.name}
                        <button className="p-2 text-[20px] bg-amber-300" onClick={async () => await handleCreatePost(user.id)}>Create post by user id</button>
                    </div>
                ))
            }
            <div className="mt-4 flex items-center justify-center gap-8">
                <input className="w-1/3 py-2 block text-[18px] border outline-none border-amber-600" name="title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                <input className="w-1/3 py-2 block text-[18px] border outline-none border-amber-600" name="body" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            </div>
            {
                post &&
                <div className="mt-4 text-[20px] text-center">
                    <div>{post.id}</div>
                    <div>{post.body}</div>
                    <div>{post.title}</div>
                    <div>{post.userId}</div>
                </div>
            }
        </div>
    </div>
  );
}

export default App;
