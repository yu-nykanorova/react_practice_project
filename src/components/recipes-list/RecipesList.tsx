import {useEffect, useState} from "react";
import {loadAuthResource, refresh} from "../../services/api.service.ts";
import type {IRecipe} from "../../models/IRecipe.ts";
import {RecipeItem} from "../recipe-item/RecipeItem.tsx";

export const RecipesList = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        loadAuthResource<IRecipe>("/recipes", "recipes")
            .then(data => {
                setRecipes(data);
                console.log(data);
            }).catch(reason => {
            console.log(reason);

            refresh()
                .then(() => loadAuthResource<IRecipe>("/recipes", "recipes"))
                .then(data => setRecipes(data));
        });
    }, []);

    return (
        <>
            <h1 className="my-8 text-[30px] text-center">Products List</h1>
            <ul className="grid grid-cols-2 gap-4">
                {
                    recipes.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe}/>
                    ))
                }
            </ul>
        </>
    );
};
