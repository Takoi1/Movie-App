import React from "react";
import { Card } from "react-bootstrap";
import RatingStar from "./RatingStar";

function MovieCard({ movie: { image, rating, name, date, description } }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} {date}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div style={{ display: "flex" }}>
            <RatingStar rating={rating} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;