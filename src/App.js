import { useEffect, useState } from "react";
import "./App.css";
import video from "./Cook.mp4";
import arrow from "./arrow.png";
import Recipies from "./Recipies";

export default function App() {

  const MY_ID = "7dfe2c77";
  const MY_KEY = "ece7be3b8975991aa4a297268d004c6e";

  const [mySearch, setMySearch] = useState ("");
  const [showRecipes, setShowResipes] = useState([]);
  const [wordSub, setWordSub] = useState ("avocado");

  useEffect (() => {
    async function catchFetch() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSub}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setShowResipes(data.hits)
  }
    catchFetch()
  }, [wordSub])

  const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
  }

const finalSearch = (e) => {
e.preventDefault();
setWordSub(mySearch);
}

  return(
  <div className="App">
    <div className="container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <h1>Let's find your recipe</h1>
  </div>

    <div className="container">
      <form onSubmit={finalSearch}> 
        <input placeholder="Pet here your prodact..." className="search" onChange={myRecipeSearch} value={mySearch}/>
      </form>
      <button className="icon">
        <img src={arrow} alt="arrow" width="30px" />
      </button>
    </div>

    <div>
      {showRecipes.map((element, index) => (
        <Recipies key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        cousin={element.recipe.cuisineType}
        time={element.recipe.totalTime}
        ingredients={element.recipe.ingredientLines}
        />
      ))}
    </div>




    </div>
  )
}