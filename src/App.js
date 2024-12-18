
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import moviesData from './moviesData';
import MovieList from './Componants/MovieList';
import AddMovie from './Componants/AddMovie';
import Filter from './Componants/Filter';
import MovieCard from './Componants/MovieCard';
import Description from './Componants/Description';


function App() {

  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRating, setSearchRating] = useState(0)

  const addMovie = (neww) => {
    setMovies([...movies, neww])
  }

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />} />
      <Route path="/movie/:id" element={<Description movies={movies} />} />
      <Route path="/card" element={<MovieCard />} />

        </Routes>
      
      <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}/>
      {/* <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} /> */}
      <AddMovie addMovie={addMovie} />
      
   
    </div>
   
  );
}

export default App;