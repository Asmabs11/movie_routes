import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import { Link } from "react-router";




const MovieCard = ({ title, posterURL, rating , id}) => {
  
  return (
    <>
     <Link to={`/movie/${id}`} >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL}  style={{ width: "100%", objectFit: "cover" , height:"70%" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            edit={false}
            value={rating}
          />
        </Card.Body>
      </Card>
      </Link>
    </>
  );
};

export default MovieCard;
