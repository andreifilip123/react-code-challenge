import React from "react";

import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list columns is-multiline">
            {Array.isArray(recipes) &&
                (recipes.length !== 0 ? (
                    recipes.map((item, index) => (
                        <RecipeItem key={index} recipe={item.recipe} />
                    ))
                ) : (
                    <h1>No recipes found</h1>
                ))}
        </div>
    );
};

export default RecipeList;
