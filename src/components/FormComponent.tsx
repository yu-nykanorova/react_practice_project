import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

export const FormComponent = () =>
{
    const [formState, setFormState] = useState<IFormProps>({
        username: "default",
        password: "111",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const user = {
            username: formState.username,
            password: formState.password,
        };
        console.log(user);
    };

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username: input.value});
    // }
    //
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value});
    // }

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input className="bg-sky-50" type="text" name={"username"} value={formState.username} onChange={handleInputChange}/>
                <input className="bg-sky-50" type="text" name={"password"} value={formState.password} onChange={handleInputChange}/>
                <button className="bg-sky-200">Send</button>
            </form>
        </div>
    );
};
