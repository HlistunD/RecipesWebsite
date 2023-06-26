export default function Recipes({ label, image, cousin, time, ingredients }) {
   return (
      <div className="recipesData">
         <ul className="container">
            <li><h4>{label}</h4></li>
            <li><img src={image} alt="dish" /></li>
            <li><h5>{cousin} cousin</h5></li>
            <li><h6>{time} min</h6></li>
         </ul>
         <ul className="list">
            {ingredients.map(ingredient => (
               <li>{ingredient}</li>
            ))}
         </ul>           
      </div>
   )
}