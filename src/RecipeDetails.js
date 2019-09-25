import React from "react";

const RecipeDetails = ({ recipe, visible, hideModal }) => {
    const { ingredientLines, totalNutrients } = recipe;
    return (
        <div className={"modal " + (visible ? " is-active" : "")}>
            <div className="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{recipe.label}</p>
                    <button
                        class="delete"
                        aria-label="close"
                        onClick={hideModal}
                    ></button>
                </header>
                <section class="modal-card-body">
                    {ingredientLines.length !== 0 &&
                        ingredientLines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    {Object.keys(totalNutrients).map((key, index) => (
                        <p key={index}>
                            {totalNutrients[key].label}:{" "}
                            {parseInt(totalNutrients[key].quentity)}{" "}
                            {totalNutrients[key].unit}
                        </p>
                    ))}
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Bookmark</button>
                    <button class="button">Remove bookmark</button>
                </footer>
            </div>
        </div>
    );
};

export default RecipeDetails;
