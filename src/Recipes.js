import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Recipes({ label, image, cousin, time, ingredients }) {
   return (
      <Card className='cardRecipe'
      style={{ width: '25rem', display:'flex', flexDirection:'column', 
      justifyContent:'flex-start', alignItems:'center'}}
      >
         <Card.Img variant="top" src={image} alt="dish" />
         <Card.Body>
            <Card.Title className='label'>{label}</Card.Title>
            <ListGroup className="list-group-flush">
               <ListGroup.Item className='cousin'>{cousin} cousin</ListGroup.Item>
               <ListGroup.Item className='time'>{time} min</ListGroup.Item>
            </ListGroup>
            <Card.Text>
               <ul className="list">
                  {ingredients.map(ingredient => (
                     <li>{ingredient}</li>
                  ))}
               </ul>
            </Card.Text>
         </Card.Body>
      </Card>
   );
}
