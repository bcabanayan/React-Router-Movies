import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MovieCard from './MovieCard.js';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  saveMovie = (movie) => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(movie);
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            save={(movie) => {
              this.saveMovie(movie);
              }
            } 
          />
        ))}  
      </div>
    );
  }
}