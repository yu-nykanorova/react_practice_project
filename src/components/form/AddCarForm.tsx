import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../services/cars.service.ts";
import {carValidator} from "../../validators/car.validator.ts";

type CarFormValues = {
    brand: string;
    price: number;
    year: number;
};

export const AddCarForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<CarFormValues>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const addCar = (data: CarFormValues) => {
        carsService.createCar({...data});
        console.log("jfg")
    };

    return (
        <div>
            <form onSubmit={handleSubmit(addCar)}>
                <label>
                    Brand:
                    <input className="block" type="text" {...register("brand")}/>
                    {
                        errors.brand &&
                        <div className="text-red-800">{errors.brand.message}</div>
                    }
                </label>
                <label>
                    Price:
                    <input className="block" type="number" {...register("price")}/>
                    {
                        errors.price &&
                        <div className="text-red-800">{errors.price.message}</div>
                    }
                </label>
                <label>
                    Year:
                    <input className="block" type="number" {...register("year")}/>
                    {
                        errors.year &&
                        <div className="text-red-800">{errors.price?.message}</div>
                    }
                </label>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};
