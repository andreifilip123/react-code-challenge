import React from "react";

const RecipeItem = ({ recipe, onClick }) => {
    const { image, label, calories, healthLabels, dietLabels } = recipe;

    return (
        <div
            className="recipe-item column is-6"
            onClick={() => onClick(recipe)}
        >
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt={label} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <div>
                                <strong>{label}</strong>
                                <br />
                                Calories: {calories}
                                <br />
                                {healthLabels.length !== 0 && (
                                    <div className="health-labels">
                                        Health labels:
                                        <div className="tags">
                                            {healthLabels.map(
                                                (label, index) => (
                                                    <span
                                                        key={index}
                                                        className="tag"
                                                    >
                                                        {label}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                                {dietLabels.length !== 0 && (
                                    <div className="diet-labels">
                                        Diet labels:
                                        <div className="tags">
                                            {dietLabels.map((label, index) => (
                                                <span
                                                    key={index}
                                                    className="tag"
                                                >
                                                    {label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default RecipeItem;
