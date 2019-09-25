import React, { useState } from "react";

import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
import secrets from "./secrets";
import RecipeDetails from "./RecipeDetails";

const App = () => {
    const [recipeQuery, setRecipeQuery] = useState("chicken");
    const [recipes, setRecipes] = useState("");
    const [fromTo, setFromTo] = useState(10);
    const [options, setOptions] = useState({
        dishType: "",
        diet: "",
        mealType: "",
        healthType: "",
        cuisineType: ""
    });
    const [selectedRecipe, setSelectedRecipe] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const handleRecipeQueryChange = e => setRecipeQuery(e.target.value);

    const handleAdvancedChange = changedOptions => {
        setOptions(changedOptions);
    };

    const composeUrl = () => {
        const baseUrl = "https://api.edamam.com/search";
        const query = `q=${recipeQuery}`;
        const appId = `app_id=${secrets.appId}`;
        const appKey = `app_key=${secrets.appKey}`;
        const to = `from=0&to=${fromTo}`;
        let advancedFields = "";
        Object.keys(options).forEach(key => {
            if (options[key] !== "") {
                advancedFields += `&${key}=${options[key]}`;
            }
        });
        return encodeURI(
            `${baseUrl}?${query}&${appId}&${appKey}&${to}${
                advancedFields !== "" ? advancedFields : ""
            }`
        );
    };

    const searchRecipes = () => {
        const url = composeUrl();
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.warn(
                        "Api request failed. There might be a problem with your api key. Did you store it in secrets.json ?"
                    );
                    return;
                }

                response.json().then(data => {
                    if (data.hits) {
                        setRecipes([...data.hits]);
                    }
                });
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    };

    const loadMoreRecipes = () => {
        setFromTo(prevFromTo => prevFromTo + 10);
        searchRecipes();
    };

    const onRecipeClick = recipe => {
        setSelectedRecipe(recipe);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="App container">
            {selectedRecipe && (
                <RecipeDetails
                    recipe={selectedRecipe}
                    visible={modalVisible}
                    hideModal={hideModal}
                />
            )}
            <RecipeSearch
                onChange={handleRecipeQueryChange}
                onAdvancedChange={handleAdvancedChange}
                onClick={searchRecipes}
            />
            <RecipeList recipes={recipes} onClick={onRecipeClick} />
            {Array.isArray(recipes) && recipes.length !== 0 && (
                <button className="button" onClick={loadMoreRecipes}>
                    Load more recipes...
                </button>
            )}
        </div>
    );
};

export default App;
