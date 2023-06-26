import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import knife from "./media/knife.jpg";
import meat from "./media/meat.jpg";
import cocktails from "./media/cocktails.jpg";
import breakfast from "./media/breakfast.jpg";



export function Articles() {
    return (
        <div className='articlesCont wrapper'>
            <Card style={{ width: '67rem' }} className='card One'>
                <Card.Img variant="top" src={meat} alt='knife_pic' className='meatPic' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="#" size="lg" disabled> Read more </Button>{' '}
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className='card Two'>
                <Card.Img variant="top" src={knife} alt='knife_pic' className='knifePic' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="#" size="lg" disabled> Read more </Button>{' '}                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className='card Three'>
                <Card.Img variant="top" src={cocktails} alt='knife_pic' className='cocktailsPic' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="#" size="lg" disabled> Read more </Button>{' '}                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className='card Four'>
                <Card.Img variant="top" src={breakfast} alt='knife_pic' className='breakfastPic' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="#" size="lg" disabled> Read more </Button>{' '}                </Card.Body>
            </Card>

        </div>

    );
}

export default Articles;