import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../services/cars.service.ts";
import {carValidator} from "../../validators/car.validator.ts";
import type {ICarCreate} from "../../models/ICar.ts";

export const AddCarForm = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid},
    } = useForm<ICarCreate>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const addCar = async (data: ICarCreate) => {
        await carsService.createCar(data);
        console.log("Car successfully added");
        alert("Car successfully added");
        reset();
    };

    return (
        <div className='pt-10 px-6 pb-6 flex flex-col items-center justify-center'>
            <h1 className="mb-8 text-gray-700 text-[30px]">Add new car</h1>
            <p></p>
            <form className="w-1/2 p-8 flex flex-col bg-slate-300 rounded-md shadow-xl" onSubmit={handleSubmit(addCar)}>
                <label className="block text-[20px]">
                    <span className="text-red-600">*</span>Brand:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="text" {...register("brand")}/>
                    {
                        errors.brand &&
                        <div className="text-[18px] text-red-600">{errors.brand?.message}</div>
                    }
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Price:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" {...register("price", {valueAsNumber: true})}/>
                    {
                        errors.price &&
                        <div className="text-[18px] text-red-600">{errors.price?.message}</div>
                    }
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Year:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" {...register("year", {valueAsNumber: true})}/>
                    {
                        errors.year &&
                        <div className="text-[18px] text-red-600">{errors.year?.message}</div>
                    }
                </label>
                <button className="w-1/3 mt-8 px-4 py-1 self-center text-[20px] bg-white border-2 border-orange-500 rounded-md shadow-xl transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-white disabled:bg-slate-100 disabled:border-none disabled:text-slate-300" disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};
