import chek from "./chekmark.png";

export default function myRecipesComponent({label, image, calories, ingredients}) {
    return(
    <div>
        <div className="container">
            <h2>{label}</h2>
            </div>

        <div className="container">
            <img src={image} alt="pic" className="tasty"/>
        </div>

        <ul className="list">
            {ingredients.map(ingredient => (
                <li><img src={chek} alt="checkM" className="icon" width="20px"/>{ingredient}</li>
            ))}
        </ul>

        <div className="container">
            <p className="par">{calories.toFixed()} calories</p>
        </div>
        
    </div>
    );
}