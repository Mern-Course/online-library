import Smallcard from "./Smallcard";
import { useState, useEffect } from "react";
import axios from "axios";

function Newreleases()
{
    const [books, setBooks] = useState([{}]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/books", { withCredentials: true })
          .then((res) => {setBooks(res.data.data.docs); console.log(res.data)}).catch((err) => console.log(err));
      }, []);


    return(
        <div className=" releasesbox" >

        <h4 style={{"border-bottom" : "4px solid #B25068", "color" : "#CBB279" }} >NEWReleases</h4>

        {
          books.map(book => {
            return(
              <Smallcard image={book.photo} author={book.author} title={book.name} genere={book.genre} rating = {book.rating} id={book._id} ></Smallcard>
            )
          })
        }
        




  
        </div>

        
    )
}

export default Newreleases;