export default function Recipies({label, image, cousin, time, ingredients}) {
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} alt="dish"/>
            </div>

            <div className="container">
                <h4>{cousin} cousin</h4>
            </div>  
        
            <div className="container">
                <p>{time} min</p>
            </div> 

            <ul className="list">
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>


        </div>
    )
}