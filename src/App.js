import React, { useState } from 'react';

import RecipeSearch from './RecipeSearch';
import RecipeList from './RecipeList';
import secrets from './secrets';

const App = () => {
    const [recipeQuery, setRecipeQuery] = useState('chicken');
    const [recipes, setRecipes] = useState([]);
    const [fromTo, setFromTo] = useState(0);

    const handleRecipeQueryChange = (e) => setRecipeQuery(e.target.value);

    const composeUrl = () => {
        const baseUrl = 'https://api.edamam.com/search';
        const query = `q=${recipeQuery}`;
        const appId = `app_id=${secrets.appId}`;
        const appKey = `app_key=${secrets.appKey}`;
        const from = `from=${fromTo}`;
        return `${baseUrl}?${query}&${appId}&${appKey}&${from}`;
    }

    const searchRecipes = () => {
        const url = composeUrl();
        fetch(url)
            .then(response => {
                if(response.status !== 200) {
                    console.warn('Api request failed. There might be a problem with your api key. Did you store it in secrets.json ?');
                    return;
                }

                response.json().then(data => {
                    if (data.hits) {
                        setRecipes(prevRecipes => [...prevRecipes, ...data.hits]);
                        setFromTo(prevFromTo => prevFromTo + 10);
                    }
                })
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

  return (
    <div className="App container">
        <RecipeSearch onChange={handleRecipeQueryChange} onClick={searchRecipes}/>
        <RecipeList recipes={recipes}/>
        {recipes.length !== 0 && (<button className="button" onClick={searchRecipes}>Load more recipes...</button>)}
    </div>
  );
}

export default App;
