type RatingStarProps = {
    rating: number;
    className?: string;
}

export const RatingStar = ({rating, className}: RatingStarProps) => {
    return (
        <div className={`${className} p-1 flex items-center gap-2`}>
            <img src="src/assets/icons/star.png" alt="star" className="max-w-5"/>
            <p className="text-lg font-semibold">{rating}</p>
        </div>
    );
};
