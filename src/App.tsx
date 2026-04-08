import './App.css'
import {Fragment, useCallback} from "react";
import {useGetPaginatedPosts} from "./api/query/posts/useGetPaginatedPosts.ts";
import {useCreatePost} from "./api/mutations/posts/useCreatePost.ts";

const DEFAULT_LIMIT = 5;

function App() {

    const {
        isFetching: isPaginatedPostFetching,
        refetch,
        data: paginatedPosts,
    } = useGetPaginatedPosts({
        limit: DEFAULT_LIMIT,
        offset: 0,
    });

    const {mutateAsync: createPostRequest} = useCreatePost();

    const handleCreatePost = useCallback(async () => {
        return await createPostRequest({
            title: "Title test",
            body: "Body test",
            userId: "1"
        });

    }, [createPostRequest, refetch])

    if (isPaginatedPostFetching) return <div>Loading...</div>;

    if (!paginatedPosts) {
        return null;
    }

    return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
        <div className="max-w-300 w-full p-6 bg-white shadow-xl rounded-sm">
            {
                paginatedPosts.map((item) => (
                    <Fragment key={item.id}>
                        <div>title: {item.title}</div>
                        <div>body: {item.body}</div>
                        <div>userId: {item.userId}</div>
                    </Fragment>
                ))
            }
            <button onClick={handleCreatePost} className="mt-2 p-2 bg-indigo-500 text-white rounded-md">Create new post</button>
        </div>
    </div>
  );
}

export default App;
