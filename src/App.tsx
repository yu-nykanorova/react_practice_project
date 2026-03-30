import './App.css'
import {Fragment, useState} from "react";
import {useGetPaginatedPosts} from "./api/query/posts/useGetPaginatedPosts.ts";

const DEFAULT_LIMIT = 10;
const TOTAL_PAGES = 10;

function App() {
    const [pagination, setPagination] = useState<{limit: number; offset: number}>({
        limit: DEFAULT_LIMIT,
        offset: 0,
    });

    const {
        isFetching: isPaginatedPostFetching,
        refetch,
        data: paginatedPosts,
    } = useGetPaginatedPosts(pagination);

    console.log(paginatedPosts);

    const handleChangePage = async (offset: number) => {
        setPagination(prevState => ({...prevState, offset}));
        await refetch();
    };

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
            <div className="flex items-center justify-between w-full">
                <button className="px-2 py-1 text-[20px] text-white bg-lime-700 rounded-md disabled:bg-slate-400" onClick={() => handleChangePage(0)} disabled={pagination.offset === 0}>
                    First
                </button>
                <button className="px-2 py-1 text-[20px] text-white bg-lime-700 rounded-md disabled:bg-slate-400" onClick={() => handleChangePage(pagination.offset - pagination.limit)} disabled={pagination.offset === 0}>
                    Prev
                </button>
                <span>Page {pagination.offset / pagination.limit + 1}</span>
                <button className="px-2 py-1 text-[20px] text-white bg-lime-700 rounded-md disabled:bg-slate-400" onClick={() => handleChangePage(pagination.offset + pagination.limit)} disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}>
                    Next
                </button>
                <button className="px-2 py-1 text-[20px] text-white bg-lime-700 rounded-md disabled:bg-slate-400" onClick={() => handleChangePage((TOTAL_PAGES - 1) * pagination.limit)} disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}>
                    Last
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
