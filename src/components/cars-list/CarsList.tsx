import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {carsService} from "../../services/cars.service.ts";
import {CarItem} from "../car-item/CarItem.tsx";

export const CarsList = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carsService.getAllCars().then(data => setCars(data));
    }, []);

    return (
        <div>
            <h1 className="mb-6 text-2xl text-center">Cars List</h1>
            <ul className="p-4 grid grid-cols-3 gap-8 items-center">
                {
                    cars.map((car) => (
                        <CarItem key={car.id} car={car}/>
                    ))
                }
            </ul>
        </div>
    );
};
