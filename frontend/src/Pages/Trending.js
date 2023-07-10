import { useEffect } from "react";
import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import "../Styling/Trending.css";
import axios from "axios";

function Trending() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/books", { withCredentials: true })
      .then((res) => console.log(res.data)).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="heading">Trending Books</h1>
      </div>

      <div className="cardbox">
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
