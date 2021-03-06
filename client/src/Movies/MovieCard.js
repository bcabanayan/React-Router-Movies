import React from 'react';
import {Link} from 'react-router-dom';


const MovieCard = props => {
  return (
    <div className="save-wrapper">
      <Link to={`/movies/${props.movie.id}`}>
        <div className="movie-card">
          <h2>{props.movie.title}</h2>
          <div className="movie-director">
            Director: <em>{props.movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{props.movie.metascore}</strong>
          </div>
          <h3>Actors</h3>
          {props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      </Link>
      <div className="save-button" onClick={props.save.bind(this, props.movie)}>Save</div>
    </div>
  )
};

export default MovieCard;
