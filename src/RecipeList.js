import React from 'react';

import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list columns is-multiline">
            {recipes.map((item, index) => (<RecipeItem key={index} recipe={item.recipe} />))}
        </div>
    )
}

export default RecipeList;
