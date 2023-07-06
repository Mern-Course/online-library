import Header from "../components/Header";
import '../Styling/singlebookpage.css';
import TextOverflow from 'react-text-overflow';
import { useState } from "react";




function Singlebookinfo()
{
    const[hold, setHold] = useState(false);
    const [hover, setHover] = useState(false);
    return(
        <div>
            <Header></Header>
            <div className="bookbox">

                <div >
                    <img  onMouseLeave={() => {setHover(false)}} onMouseEnter={() => {setHover(true)}} style={ hover ? {"transform" : "scale(1.02)"} : {"transform" : "scale(1)"} }  src="https://images.randomhouse.com/cover/9780553808049" className="imagestyle" ></img>
                    <div className="btns" >

                    <button className="placeonhld" onClick={() => {setHold(!hold); console.log(hold)}} >Place On Hold</button> <br></br>
                    <button className="checkavai" >Check Availability</button>

                    </div>
                    
                </div>

                <div className="infobox" >

                    <div style={{display : "flex"}} >
                        
                        <label className="labelstyle" > Title :</label> <p>  <TextOverflow text={"GAME OF THRONES "}></TextOverflow>  </p> 

                    </div>
                    <div style={{display : "flex"}} >
                        <label className="labelstyle"> Authors :</label> <p>  <TextOverflow text={"GEORGE R . R MARTIN "}></TextOverflow>  </p> 
                    </div>

                    <div style={{display : "flex"}} >
                    <label className="labelstyle"> Publisher :</label> <p>  <TextOverflow text={"Bantam Spectra (US) Voyager Books (UK) "}></TextOverflow>  </p> 
                    </div>

                    <div style={{display : "flex"}} >
                    <label className="labelstyle"> Release Date :</label> <p>  <TextOverflow text={"13/09/1996 "}></TextOverflow>  </p> 
                    </div>

                    <div style={{display : "flex"}} >
                    <label className="labelstyle"> Cost: </label> <p>  <TextOverflow text={"899.00 INR "}></TextOverflow>  </p> 
                    </div>

                    <div>
                        <label className="labelstyle"> Description :</label> 
                            <div className="desbox" > 
                                <p> "Game of Thrones" is the first book in the series and sets the stage for the epic fantasy world of Westeros, a land of intricate political intrigue and warring noble families. The story primarily follows three main plotlines: the noble Stark family, the ambitious Lannister family, and the exiled Targaryens.

The book introduces readers to the Starks, led by Lord Eddard Stark, who is summoned to the court of King Robert Baratheon to serve as his Hand. As Eddard uncovers dark secrets and political conspiracies in King's Landing, the capital of the Seven Kingdoms, he becomes embroiled in a dangerous web of power struggles and deception.
Meanwhile, in the Lannister family, Cersei Lannister, the queen, and her brother Jaime Lannister, engage in forbidden love and schemes to maintain their grip on power. Their younger brother, Tyrion Lannister, known for his wit and cunning, navigates the treacherous landscape of Westeros while facing prejudice due to his dwarfism.
Across the Narrow Sea, Daenerys Targaryen, the last surviving member of the deposed Targaryen dynasty, is married off to the powerful Dothraki horselord Khal Drogo. As Daenerys adapts to her new life, she begins to harness her own inner strength and dragons, setting the stage for her journey to reclaim the Iron Throne.
Filled with complex characters, intricate plotting, and unexpected twists, "A Game of Thrones" introduces readers to a sprawling world of politics, power, and magic. The book's richly detailed narrative and gritty realism have captivated audiences worldwide, making it a beloved entry point into the epic saga of "A Song of Ice and Fire." </p>
                            </div> 
                    </div>

                    <div style={{"color" : "green", "textAlign" : "center", "marginTop" : "5px"}}>
                    {hold  && <h3> Book placed on hold!  </h3>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singlebookinfo;