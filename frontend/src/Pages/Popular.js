import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import '../Styling/Trending.css';
import axios from 'axios';
import { useEffect } from "react";
function Popular()
{

    useEffect(() => {
        axios.get("http://localhost:5000/")
             .then((res) => {console.log(res)})
             .catch(err => {console.log(err)});
    })



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