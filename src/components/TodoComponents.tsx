import {useEffect, useState} from "react";
import type {ITodo} from "../models/todoModel.ts";
import {getTodos} from "../services/api.service.ts";
import {TodoComponent} from "./TodoComponent.tsx";

export const TodoComponents = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    useEffect(() => {
        async function fetchData(){
            const todosObj = await getTodos();
            setTodoList(todosObj.todos);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="mb-8 text-4xl">Todo List</h1>
            <ul className="max-w-150">
                {
                    todoList.map((item) => (
                        <TodoComponent key={item.id} todo={item}/>
                    ))
                }
            </ul>
        </>
    );
};
