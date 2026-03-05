import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: "1"});

    return (
        <div className="max-w-50 mx-auto flex justify-between items-center gap-8">
            <button className="px-4 py-2 border bg-amber-50 border-amber-900 rounded-sm shadow-md" onClick={() => {
                const pg = query.get("pg");
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg: (--currentPage).toString()});
                }
            }}>Prev</button>
            <button className="px-4 py-2 border bg-amber-50 border-amber-900 rounded-sm shadow-md" onClick={() => {
                const pg = query.get("pg");
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg: (++currentPage).toString()});
                }
            }}>Next</button>
        </div>
    );
};
