import type {IReview} from "../../models/productModel.ts";
import type {FC} from "react";
import {RatingStar} from "../UI/RatingStar.tsx";

type ReviewItemProps = {
    review: IReview;
}

export const ReviewItem: FC<ReviewItemProps> = ({review}) => {
    return (
        <li className="p-4 bg-gray-300">
            <RatingStar className="pl-1 bg-gray-50" rating={review.rating} />
            <p>{review.date}</p>
            <p>{review.reviewerName}</p>
            <p>{review.reviewerEmail}</p>
            <p className="mt-2 text-xl">{review.comment}</p>
        </li>
    );
};
