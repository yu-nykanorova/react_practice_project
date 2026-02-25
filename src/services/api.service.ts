import type {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/IPost.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
       return await fetch(urls.users.allUsers)
        .then((res) => res.json());
    },
    getUser: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then((res) => res.json());
    },
};

export const postService = {
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then((res) => res.json());
    },
    getPost: async (id: number): Promise<IUser> => {
        return await fetch(urls.posts.byId(id))
            .then((res) => res.json());
    },
    getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
        .then((res) => res.json());
    }
};