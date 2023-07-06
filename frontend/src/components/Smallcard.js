
import { Button } from "bootstrap";
import { useState } from "react";
import TextOverflow from 'react-text-overflow';

function Smallcard()
{

    const [hovered, setHovered] = useState(false);

    var author = "Author : ";
    var rating = "Rating : ";
    var genere = "Genere : ";

    let v = "George R.R Martin "
    return (
        <div onMouseLeave={() => {setHovered(false)}} onMouseEnter={() => {setHovered(true); console.log(hovered)}} className="smallcard"  style={ hovered ? {"transform" : "scale(1.06)"} : {"transform" : "scale(1)"} } >
            <img src="https://images.randomhouse.com/cover/9780553808049"
            style={{"height" : "300px", "border" : "1px solid black", "margin" : "10px"}} ></img>  
            <h5>Title</h5>

            <TextOverflow text={author + v}></TextOverflow> 
            <TextOverflow text={genere + v}></TextOverflow> 
            <TextOverflow text={rating + v}></TextOverflow> 
        
            <a href="/singlebookinfo" ><button className="smallcardview">View</button></a>
            
        </div>
    );
}

export default Smallcard;