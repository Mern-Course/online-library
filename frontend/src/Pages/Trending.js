import { useEffect, useState } from "react";
import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import "../Styling/Trending.css";
import axios from "axios";

function Trending() {

  const [books, setBooks] = useState([{}])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/books/trending", { withCredentials: true })
      .then((res) => {setBooks(res.data.data); console.log(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="heading">Trending Books</h1>
      </div>

      <div className="cardbox">
        
        {
          books.map(book => {
            return(
              <Smallcard author={book.author} title={book.name} genere={book.genre} rating = {book.rating} id={book._id} image={book.photo} ></Smallcard>
            )
          })
        }
      </div>
    </div>
  );
}

export default Trending;
