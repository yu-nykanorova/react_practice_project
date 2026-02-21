export interface IPostsObjModel {
	posts: IPost[];
	total: number;
	skip: number;
	limit: number;
}

export interface IPost {
	id: number;
	title: string;
	body: string;
	userId: number;
	views: number;
	tags: string[];
	reactions: IReaction;
}

export interface IReaction {
	likes: number;
	dislikes: number;
}

