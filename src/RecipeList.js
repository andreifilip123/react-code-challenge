import React from "react";

import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onClick }) => {
    return (
        <div className="recipe-list columns is-multiline">
            {Array.isArray(recipes) &&
                (recipes.length !== 0 ? (
                    recipes.map((item, index) => (
                        <RecipeItem
                            key={index}
                            recipe={item.recipe}
                            onClick={onClick}
                        />
                    ))
                ) : (
                    <h1>No recipes found</h1>
                ))}
        </div>
    );
};

export default RecipeList;
