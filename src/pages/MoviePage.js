import React from 'react';
import { initialMovies } from '../const/inicialMovie';
import Movie from '../components/Movie/Movie';


const MoviePage = () => {
  return (
    <div className='container'>
    <div className='row'>
      {initialMovies.map(movie => (
        <div className='col-md-4' key={movie.id}>
          <Movie
            movie={movie}
          />
        </div>
      ))}
    </div>

  </div>
  )
}

export default MoviePage
