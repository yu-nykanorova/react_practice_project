import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type CarProps = {
    car: ICar;
};

export const CarItem: FC<CarProps> = ({car}) => {
    return (
        <li className="group flex flex-col gap-1 bg-white shadow-lg rounded-xl cursor-pointer hover:bg-orange-500 transition-all duration-300 ease-in-out">
            <p className="px-4 py-2 text-right text-black text-[20px] bg-slate-300 rounded-t-xl">ID: {car.id}</p>
            <h2 className="px-4 py-2 text-orange-500 text-[24px] font-semibold group-hover:text-white">{car.brand}</h2>
            <p className="px-4 py-2 text-[20px] group-hover:text-white">Price: {car.price}</p>
            <p className="px-4 py-2 text-[20px] group-hover:text-white">Year: {car.year}</p>
        </li>
    );
};
