import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "./validators/user.validator.ts";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponentJoi = () =>
{
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(customHandler)}>
                <label>
                    Name:
                    <input className="block bg-white" type="text" {...register("username")} />
                {
                    errors.username &&
                    <div className="text-red-700">{errors.username.message}</div>
                }
                </label>
                <label>
                    Password:
                    <input className="block bg-white" type="text" {...register("password")}/>
                {
                    errors.password &&
                    <div className="text-red-700">{errors.password.message}</div>
                }
                </label>
                <label>
                    Age:
                    <input className="block bg-white" type="number" {...register("age", {valueAsNumber: true})}/>
                {
                    errors.age &&
                    <div className="text-red-700">{errors.age.message}</div>
                }
                </label>
                <button className="bg-violet-400 text-white disabled:bg-slate-400 disabled:text-slate-500" disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};
