import {useSearchParams} from "react-router-dom";

export const Pagination = () => {
    const [query, setQuery] = useSearchParams({limit: "10", skip: "0"});

    const limit = Number(query.get("limit")) || 10;
    const skip = Number(query.get("skip")) || 0;

    const handleClickPrev = () => {
        const currentPage = skip - limit;
        setQuery({limit: limit.toString(), skip: currentPage.toString()});
    }

    const handleClickNext = () => {
        const currentPage = skip + limit;
        setQuery({limit: limit.toString(), skip: currentPage.toString()});
    }

    return (
        <div className="max-w-100 mx-auto mt-8 flex justify-center items-center gap-6">
            <button className="px-3 py-1 text-2xl text-slate-800 bg-sky-50 border-2 border-sky-800 rounded-md shadow-xl hover:bg-sky-200" onClick={handleClickPrev}>Prev</button>
            <button className="px-3 py-1 text-2xl text-slate-800 bg-sky-50 border-2 border-sky-800 rounded-md shadow-xl hover:bg-sky-200" onClick={handleClickNext}>Next</button>
        </div>
    );
};
