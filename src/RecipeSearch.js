import React, { useState, useEffect } from "react";

import {
    cuisineTypes,
    dishTypes,
    mealTypes,
    healthTypes,
    dietTypes
} from "./ApiTypes";
import Select from "./Select";

const RecipeSearch = ({ onChange, onAdvancedChange, onClick }) => {
    const [advancedVisible, setAdvancedVisible] = useState(false);
    const toggleAdvancedFields = () => {
        setAdvancedVisible(prev => !prev);
    };
    const [cuisineType, setCuisineType] = useState("");
    const [dishType, setDishType] = useState("");
    const [mealType, setMealType] = useState("");
    const [healthType, setHealthType] = useState("");
    const [diet, setDiet] = useState("");

    useEffect(() => {
        onAdvancedChange({
            cuisineType,
            dishType,
            mealType,
            healthType,
            diet
        });
    }, [cuisineType, dishType, mealType, healthType, diet]);

    return (
        <div className="recipe-search">
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="recipe"
                        id="recipe"
                        placeholder="Find a recipe"
                        onChange={onChange}
                    />
                </div>
                <div className="control">
                    <button onClick={onClick} className="button is-info">
                        Search
                    </button>
                </div>
                <div className="control">
                    <button
                        onClick={toggleAdvancedFields}
                        className="button is-info"
                    >
                        Show advanced fields
                    </button>
                </div>
            </div>
            {advancedVisible && (
                <div className="advanced">
                    <Select
                        items={dietTypes}
                        onSelect={value => setDiet(value)}
                        label="Diet"
                    />
                    <Select
                        items={healthTypes}
                        onSelect={value => setHealthType(value)}
                        label="Health"
                    />
                    <Select
                        items={cuisineTypes}
                        onSelect={value => setCuisineType(value)}
                        label="Cuisine"
                    />
                    <Select
                        items={dishTypes}
                        onSelect={value => setDishType(value)}
                        label="Dish"
                    />
                    <Select
                        items={mealTypes}
                        onSelect={value => setMealType(value)}
                        label="Meal"
                    />
                </div>
            )}
        </div>
    );
};

export default RecipeSearch;
