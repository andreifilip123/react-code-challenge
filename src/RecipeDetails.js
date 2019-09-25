import React from "react";

const RecipeDetails = ({
    recipe,
    visible,
    hideModal,
    saveBookmark,
    removeBookmark
}) => {
    const { ingredientLines, totalNutrients } = recipe;
    return (
        <div className={"modal " + (visible ? " is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{recipe.label}</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={hideModal}
                    ></button>
                </header>
                <section className="modal-card-body">
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
                <footer className="modal-card-foot">
                    <button
                        onClick={saveBookmark}
                        className="button is-success"
                    >
                        Bookmark
                    </button>
                    <button onClick={removeBookmark} className="button">
                        Remove bookmark
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default RecipeDetails;
