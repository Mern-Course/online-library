import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import '../Styling/Trending.css';

function Popular()
{
    return(
        <div>
            <Header></Header>
            <div> 
                <h1 className="heading" >Popular Books</h1> 
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

export default Popular;