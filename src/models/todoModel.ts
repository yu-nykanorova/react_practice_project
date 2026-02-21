export interface ITodosObjModel {
	todos: ITodo[];
	total: number;
	skip: number;
	limit: number;
}

export interface ITodo {
	id: number;
	completed: boolean;
	todo: string;
	userId: number;
}

