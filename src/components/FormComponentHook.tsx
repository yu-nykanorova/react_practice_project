import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponentHook = () =>
{
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<IFormProps>({
        mode: "all"
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(customHandler)}>
                <label>
                    Name:
                    <input className="block bg-white" type="text" {...register("username", {
                    required: true,
                    pattern: {
                        value: /^[A_Za-z]+$/,
                        message: "only letters allowed",
                    },
                    // minLength: {
                    //     value: 2,
                    //     message: "minimum 2 letters",
                    // }
                })} />
                {
                    errors.username &&
                    <div className="text-red-700">{errors.username.message}</div>
                }
                </label>
                <label>
                    Password:
                    <input className="block bg-white" type="text" {...register("password", {
                    required: true,
                    minLength: {
                        value: 8,
                        message: "minimum 8 characters"
                    },
                    maxLength: {
                        value: 14,
                        message: "password too long"
                    }
                })}/>
                {
                    errors.password &&
                    <div className="text-red-700">{errors.password.message}</div>
                }
                </label>
                <label>
                    Age:
                    <input className="block bg-white" type="number" {...register("age", {
                    required: true,
                    valueAsNumber: true,
                    min: {
                        value: 17,
                        message: "age too small"
                    },
                    max: {
                        value: 120,
                        message: "age too big"
                    },
                })}/>
                {
                    errors.age &&
                    <div className="text-red-700">{errors.age.message}</div>
                }
                </label>
                <button className="bg-emerald-400 disabled:bg-slate-400 disabled:text-slate-500" disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};
