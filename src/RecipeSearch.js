import React from 'react';

const RecipeSearch = ({ onChange, onClick }) => {
    return (
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" name="recipe" id="recipe" placeholder="Find a recipe" onChange={onChange} />
            </div>
            <div className="control">
                <button onClick={onClick} className="button is-info">
                    Search
                </button>
            </div>
        </div>
    );
}

export default RecipeSearch;
