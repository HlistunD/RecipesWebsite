import logo from "./media/restaurant.png" 

export default function Top() {
return(
    <div className="topCont">
        <ul className="listOfTop">
            <li>
                <h3>TOP FOOD<img src={logo} alt="logo" className="topLogo"/></h3>
            </li>
        <li>
            <span>243 Million</span>
            Annual Readers</li>
        <li> 
            <span>16,000+</span>Recipes
        </li>
        <li>
            <span>35,000+</span> 
            Step by Step Photos </li>
        <li>
            <span>1,200+</span> 
            Instructional Videos </li>
        </ul>
    </div>
)
}