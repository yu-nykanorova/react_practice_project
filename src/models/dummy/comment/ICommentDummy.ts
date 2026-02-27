export interface ICommentDummy {
	id: number;
	postId: number;
	body: string;
	user: ICommentDummyUser;
	likes: number;
}

export interface ICommentDummyUser {
	id: number;
	username: string;
	fullName: string;
}


