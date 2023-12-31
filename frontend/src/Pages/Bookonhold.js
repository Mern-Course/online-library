import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Smallcard from "../components/Smallcard.js";
import "../Styling/Trending.css";

function Bookonhold() {
  const [booksid, setBooksid] = useState();
  const [books, setBooks] = useState([]);
  let temp = [];

  useEffect(() => {
    async function fetcher() {
      try {
        let res = await axios.get("http://localhost:5000/api/v1/users/me", {
          withCredentials: true,
        });
        setBooks(res.data.data.booksIssued);
      } catch (err) {
        console.log(err);
      }
    }

    fetcher();
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="sidenavbox">
        <ul class="nav flex-column">
          <li class="nav-item linkbox">
            <a className="linkitem" href="/account">Account Details</a>
          </li>

          <li class="nav-item linkbox">
            <a className="linkitem" href="/changepswd">Change Password</a>
          </li>

          <li class="nav-item linkbox">
            <a className="linkitem" href="/booksonhold">Books on Hold</a>
          </li>
        </ul>
        <div
          style={{
            marginLeft: "20rem",
            marginTop: "-8rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {books && books.map((book) => (
            <Smallcard
              author={book.author}
              genere={book.genre}
              rating={book.rating}
              image={book.photo}
              id={book._id}
              title={book.name}
            >
            </Smallcard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookonhold;
