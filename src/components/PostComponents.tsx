import {useEffect, useState} from "react";
import type {IPost} from "../models/postModel.ts";
import {getPosts} from "../services/api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostComponents = () => {
    const [postList, setPostList] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(data => setPostList(data));
    },[])

    return (
        <>
            <h1 className="mb-8 text-3xl text-center text-white font-semibold">POSTS LIST</h1>
            <ul className="max-w-300 mx-auto grid grid-cols-2 gap-8">
                {
                    postList.map((item) => (
                        <PostComponent key={item.id} post={item}/>
                    ))
                }
            </ul>
        </>
    );
};
