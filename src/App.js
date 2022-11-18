import "./App.css";
import { useEffect, useState } from "react";
import video from "./food.mp4";
import search from "./search.png";
import MyRecipesComponent from "./MyRecipesComponent";

export default function App() {

const MY_ID = "7dfe2c77";
const MY_KEY = "ece7be3b8975991aa4a297268d004c6e";

const [mySearch, setSearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);

useEffect(() => {
  const getResult = async() => {
  const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}');
  const data = await response.json();
  setMyRecipes(data.hits);
  }
  getResult();
  }, []);

  const myRecipeSearch = (e) => {
    setSearch(e.target.value);
  }

return(
  <div className="App"> 
      <div className="container">
  <video autoPlay muted loop>
  <source alt="video" src={video} type="video/mp4"/>
  </video>
    <h1>Find a Recipe</h1>
</div>

<div className="container">
  <form>
<input className="search" placeholder="Put your ingridient..." type="text" onChange={myRecipeSearch} value={mySearch}/>
  </form>
  </div>

<div className="container">
  <button>
  <img alt="search" src={search} className="icons" width="35px" />
  </button>
</div>

<div>
{myRecipes.map(element => {
  <MyRecipesComponent/>
})}
</div>

  </div>
)
}