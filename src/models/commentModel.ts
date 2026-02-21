export interface ICommentsObjModel {
	comments: IComment[];
	total: number;
	skip: number;
	limit: number;
}

export interface IComment {
	id: number;
	postId: number;
	body: string;
	likes: number;
	user: IUser;
}

export interface IUser {
	id: number;
	username: string;
	fullName: string;
}

