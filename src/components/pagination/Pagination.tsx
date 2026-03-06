import {useSearchParams} from "react-router-dom";

export const Pagination = ({total}: {total: number}) => {
    const [query, setQuery] = useSearchParams({page: "1"});

    let currentPage = Number(query.get("page")) || 1;
    const limit = 10;
    const totalPages = Math.ceil(total / limit);

    const handleClickPrev = () => {
        if (currentPage > 1) {
            setQuery({page: (--currentPage).toString()});
        }
    }

    const handleClickNext = () => {
        setQuery({page: (++currentPage).toString()});
    }

    return (
        <div className="max-w-100 mx-auto mt-8 flex justify-center gap-6">
            <button
                className="px-3 py-1 flex items-center justify-center text-xl text-slate-800 bg-sky-50 border-2 border-sky-800 rounded-md shadow-xl enabled:hover:bg-sky-800 enabled:hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickPrev}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div className="px-3 py-1 flex items-center justify-center text-[18px] text-sky-700 bg-sky-50 border-2 border-sky-800 rounded-md">{currentPage} / {totalPages}</div>
            <button
                className="px-3 py-1 flex items-center justify-center text-xl text-slate-800 bg-sky-50 border-2 border-sky-800 rounded-md shadow-xl enabled:hover:bg-sky-800 enabled:hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickNext}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};
