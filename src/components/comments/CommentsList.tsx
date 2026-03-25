import {CommentCard} from "./CommentCard.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlice/commentSlice.ts";

export const CommentsList = () => {
    const {comments, loadState, error} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (comments.length === 0) {
            dispatch(commentSliceActions.loadComments());
        }
    }, []);

    return (
        <>
            {loadState === "loading" && <p className="text-[24px] text-yellow-600">Loading...</p>}
            {loadState === "failed" && <p className="text-[20px] text-red-600">{error}</p>}
            <ul className="px-10 max-w-300 mx-auto grid grid-cols-1 gap-8">
                {
                    comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment}/>
                    ))
                }
            </ul>
        </>
    );
};
