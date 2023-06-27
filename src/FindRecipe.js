import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import background from "./media/background.jpg";
import Recipes from "./Recipes";
import search from "./media/search.png";


export default function FindRecipe() {
    const MY_ID = "7dfe2c77";
    const MY_KEY = "ece7be3b8975991aa4a297268d004c6e";
    const [mySearch, setMySearch] = useState("");
    const [showRecipes, setShowRecipes] = useState([]);
    const [wordSub, setWordSub] = useState("avocado");
    const [searched, setSearched] = useState(false);


    useEffect(() => {
        async function catchFetch() {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSub}&app_id=${MY_ID}&app_key=${MY_KEY}`
            );
            const data = await response.json();
            setShowRecipes(data.hits);
        }
        if (searched) {
            catchFetch();
        }
    }, [wordSub, searched]);

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    };

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSub(mySearch);
        setSearched(true);
    }

    return (
        <div className="FindRecipeCont">
            <div className="container">
                <img src={background} alt="background" className="background" />
                <h3>Let's find your recipe</h3>
            </div>

            <div className="container">
                <form onSubmit={finalSearch}>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Put here your product..."
                            className="search"
                            onChange={myRecipeSearch}
                            value={mySearch}
                        />
                        <button className="btnSearch"><img src={search} alt="search"/></button>
                    </div>
                </form>
                <div className="wrapperOfPopular">
                    <h3>Popular Searches</h3>
                    <ul className="listOfPopular">
                        <li><Button variant="secondary"><a href="https://www.loveandlemons.com/salad-recipes/">Salads</a></Button>{' '}</li>
                        <li><Button variant="secondary"><a href="https://www.delish.com/cooking/recipe-ideas/g2894/things-to-do-with-avocado/">Avocado</a></Button>{' '}</li>
                        <li><Button variant="secondary"><a href="https://www.bonappetit.com/gallery/egg-recipes">Eggs</a></Button>{' '}</li>
                        <li><Button variant="secondary"><a href="https://www.foodnetwork.com/recipes/photos/50-quick-snack-recipes">Snacks</a></Button>{' '}</li>
                    </ul>
                </div>
            </div>
            <div className="displayRecipe">
                {searched && (
                    showRecipes.map((element, index) => (
                        <Recipes
                            key={index}
                            label={element.recipe.label}
                            image={element.recipe.image}
                            cousin={element.recipe.cuisineType}
                            time={element.recipe.totalTime}
                            ingredients={element.recipe.ingredientLines}
                        />
                    ))
                )}
            </div>

        </div>

    )
}