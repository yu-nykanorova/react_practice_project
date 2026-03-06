import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponentHook = () =>
{
    const {handleSubmit, register} = useForm<IFormProps>();

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit((formDataProps) => {
                console.log(formDataProps);
            })}>
                <input className="bg-sky-50" type="text" {...register("username")} />
                <input className="bg-sky-50" type="text" {...register("password")}/>
                <input className="bg-sky-50" type="number" {...register("age")}/>
                <button className="bg-sky-200">Send</button>
            </form>
        </div>
    );
};
