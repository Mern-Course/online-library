import { useState } from "react";
import TextOverflow from "react-text-overflow";

function Smallcard(props) {
  const [hovered, setHovered] = useState(false);

  var author = "Author : ";
  var rating = "Rating : ";
  var genere = "Genre : ";

  var link = "/singlebookinfo/" + `${props.id}`;

  let v = "George R.R Martin ";
  let imagelink = `${props.image}`;
  return (
    <div
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
        console.log(hovered);
      }}
      className="smallcard"
      style={hovered
        ? { "transform": "scale(1.06)" }
        : { "transform": "scale(1)" }}
    >
      <img
        src={imagelink}
        style={{
          "height": "300px",
          "border": "1px solid black",
          "margin": "10px",
        }}
      >
      </img>
      <p style={{ "fontWeight": "bolder" }}>{props.title}</p>

      <TextOverflow text={author + props.author}></TextOverflow>
      <TextOverflow text={genere + props.genere}></TextOverflow>
      <TextOverflow text={rating + props.rating}></TextOverflow>

      <a href={link}>
        <button className="smallcardview">View</button>
      </a>
    </div>
  );
}

export default Smallcard;
