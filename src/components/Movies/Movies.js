import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { connect } from "react-redux";
import "./Movies.css";

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

function Movies(props) {

  return (
    <ul className="movies">
      {props.movies.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps)(Movies);