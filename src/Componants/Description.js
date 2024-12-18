
import { useParams, useNavigate } from 'react-router';

const Description = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  console.log(movies)
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      
      <div>
      <iframe width="560" height="315" 
       src={movie.trailer} 
       title={`${movie.title} Trailer`} 
      ></iframe>
      </div>
      <button onClick={() => navigate('/')}>Back to Card</button>
    </div>
  );
};

export default Description;
