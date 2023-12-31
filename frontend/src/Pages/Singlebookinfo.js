import Header from "../components/Header";
import "../Styling/singlebookpage.css";
import TextOverflow from "react-text-overflow";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singlebookinfo() {
  const { id } = useParams();

  const [hover, setHover] = useState(false);
  const [book, setBook] = useState({});
  const [hold, setHold] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/books/${id}`, {
      withCredentials: true,
    })
      .then((res) => {
        let temp = res.data.data;
        temp.added = new Date(res.data.data.added);
        setBook(temp);

        if (res.data.data.available == true) {
          setData("Book is available");
          setHold(false);
        } else {
          setData("Book has already been placed on hold");
          setHold(true);
        }
      }).catch((err) => console.log(err));
  }, []);

  let imagelink = `${book.photo}`;

  function holdfun() {
    if (book.available) {
      axios.get(`http://localhost:5000/api/v1/books/issue/${id}`, {
        withCredentials: true,
      })
        .then((res) => {
          setHold(true);
          const copyBook = { ...book };
          copyBook.available = false;
          setBook(copyBook);
          setData("Book placed on hold");
        })
        .catch((err) => console.log(err));
    } else {
      setData("Book is not available to place on hold");
    }
  }

  function unplacehold() {
    if (hold == true) {
      axios.get(`http://localhost:5000/api/v1/books/return/${id}`, {
        withCredentials: true,
      })
        .then((res) => {
          setHold(false);
          setData("Book unplaced on hold");
          book.available = true;
        })
        .catch((err) => console.log(err));
    } else {
      setData("Book is not placed on hold yet!");
    }
  }

  return (
    <div>
      <Header></Header>
      <div className="bookbox">
        <div>
          <img
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            style={hover
              ? { "transform": "scale(1.02)" }
              : { "transform": "scale(1)" }}
            src={imagelink}
            className="imagestyle"
          >
          </img>
          <div className="btns">
            <button className="placeonhld" onClick={holdfun}>
              Place on Hold
            </button>{" "}
            <br></br>
            <button className="placeonhld" onClick={unplacehold}>
              Unplace on Hold
            </button>{" "}
            <br></br>
          </div>
        </div>

        <div className="infobox">
          <div style={{ display: "flex" }}>
            <label className="labelstyle">Title :</label>{" "}
            <p>
              <TextOverflow text={book.name}></TextOverflow>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="labelstyle">Authors :</label>{" "}
            <p>
              <TextOverflow text={book.author}></TextOverflow>
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Publisher :</label>{" "}
            <p>
              <TextOverflow text={book.publisher}></TextOverflow>
            </p>
          </div>

          {book.added &&
            (
              <div style={{ display: "flex" }}>
                <label className="labelstyle">Release Date :</label>{" "}
                <p>
                  <TextOverflow
                    text={`${book.added.getDate()}/${
                      book.added.getMonth() + 1
                    }/${book.added.getFullYear()}`}
                  >
                  </TextOverflow>
                </p>
              </div>
            )}

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Cost:</label>{" "}
            <p>
              <TextOverflow text={book.cost}></TextOverflow>
            </p>
          </div>

          <div>
            <label className="labelstyle">Description :</label>
            <div className="desbox">
              <p>{book.description}</p>
            </div>
          </div>

          <div
            style={{
              "color": "green",
              "textAlign": "center",
              "marginTop": "5px",
            }}
          >
            {data}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlebookinfo;
