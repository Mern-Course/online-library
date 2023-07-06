import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import '../Styling/Trending.css';

function Trending()
{
    return(
        <div>
            <Header></Header>
            <div> 
                <h1 className="heading" >Trending Books</h1> 
            </div>

            <div className="cardbox" >

                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>
                <Smallcard></Smallcard>

            </div>
        
        </div>
    );
}

export default Trending;