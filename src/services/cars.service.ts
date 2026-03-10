import type {ICar, ICarCreate} from "../models/ICar.ts";
import {axiosInstance} from "./api.service.ts";

export const carsService = {
    getAllCars: async (): Promise<ICar[]> => {
        const {data} = await axiosInstance.get<ICar[]>("/cars");
        return data;
    },
    createCar: async (car: ICarCreate): Promise<ICar> => {
        const {data} = await axiosInstance.post("/cars", car);
        return data;
    }
};
