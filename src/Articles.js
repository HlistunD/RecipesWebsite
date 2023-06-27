import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import knife from "./media/knife.jpg";
import meat from "./media/meat.jpg";
import cocktails from "./media/cocktails.jpg";
import breakfast from "./media/breakfast.jpg";



export function Articles() {
    return (
        <div className='articlesCont wrapperArt'>
            <Card className='card One'>
                <Card.Img variant="top" src={meat} alt='knife_pic' className='meatPic' />
                <Card.Body>
                    <Card.Title className='cardTitle meatTitle'>WORLD’S BEST STEAK MARINADE</Card.Title>
                    <Card.Text className='cardText'>
                        Today I am sharing with you the BEST steak marinade!
                        My mouth is watering just thinking about it! Steak can be a little intimidating
                        to cook, it used to be for me. I think it was because steak is usually so spendy
                        and I never wanted to mess it up. We all know that when steak is done right, it is
                        insanely delicious. With this marinade, I have created a foolproof way of guaranteeing
                        your steak will taste heavenly...
                    </Card.Text>
                    <Button className='btnLink'
                        href="https://therecipecritic.com/worlds-best-steak-marinade/"
                        size="lg"
                        target="_blank"
                        > Read more </Button>{' '}
                </Card.Body>
            </Card>
            <Card className='card Two'>
                <Card.Img variant="top" src={knife} alt='knife_pic' className='knifePic' />
                <Card.Body>
                    <Card.Title className='cardTitle'>How Long Do Kitchen Knives Last?</Card.Title>
                    <Card.Text className='cardText'>
                        You go into the kitchen to prepare some food and notice your knives are getting
                        quite dull. You can’t quite remember how long you’ve had them...
                    </Card.Text>
                    <Button className='btnLink'
                        href="https://www.prolinerangehoods.com/blog/how-long-do-kitchen-knives-last/#:~:text=Over%20time%2C%20the%20tip%20of,condition%2C%20be%20gentle%20when%20cutting."
                        size="lg"
                        target="_blank"
                        > Read more </Button>{' '}
                </Card.Body>
            </Card>
            <Card className='card Three'>
                <Card.Img variant="top" src={cocktails} alt='knife_pic' className='cocktailsPic' />
                <Card.Body>
                    <Card.Title className='cardTitle'>Top 10 easy summer cocktails...</Card.Title>
                    <Card.Text className='cardText'>
                        Cool off when the weather turns hot with one of our
                        thirst-quenching summer cocktail recipes. Try a fruity punch,
                        sangria with a twist, or a refreshing spritz.
                    </Card.Text>
                    <Button className='btnLink'
                        href="https://firstwefeast.com/drink/10-easy-cocktail-recipes/"
                        size="lg"
                        target="_blank"
                        > Read more </Button>{' '}
                </Card.Body>
            </Card>
            <Card className='card Four'>
                <Card.Img variant="top" src={breakfast} alt='knife_pic' className='breakfastPic' />
                <Card.Body>
                    <Card.Title className='cardTitle'>The healthiest breakfast is so simple!</Card.Title>
                    <Card.Text className='cardText'>
                        Trying to make healthier food choices can sometimes feel overwhelming and
                        frustrating. But it doesn’t have to be. Eating well is possible...
                    </Card.Text>
                    <Button className='btnLink'
                        href="https://thewholeu.uw.edu/2021/12/20/what-does-a-healthy-breakfast-look-like/"
                        size="lg"
                        target="_blank"
                        > Read more </Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );
}
export default Articles;