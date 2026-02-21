import type {ITodo} from "../models/todoModel.ts";
import type {FC} from "react";

type TodoComponentProps = {
    todo: ITodo;
}

export const TodoComponent: FC<TodoComponentProps> = ({todo}) => {
    return (
        <li className="p-4 shadow-sm bg-white not-last:mb-6">
            <p className="text-2xl text-blue-700">Todo {todo.id}</p>
            <p className="text-xl text-red-800">User #{todo.userId}</p>
            <h2 className="text-lg">{(todo.todo[0]).toUpperCase() + (todo.todo).slice(1)}</h2>
            {
                todo.completed ?
                    <p >Status: <span className="text-lg text-green-700 font-semibold">done</span></p>
                :
                    <p >Status: <span className="text-lg text-red-700 font-semibold">active</span></p>
            }
        </li>
    );
};
