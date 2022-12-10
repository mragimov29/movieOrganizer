import React, { Component } from "react";
import { addToFavorites } from "../../redux/actions/actions";
import { connect } from "react-redux";
import "./MovieItem.css";

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id)),
});

function MovieItem({ title, year, poster, imdbID, addToFavorites }) {
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={poster} alt={title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {title}&nbsp;({year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={() => addToFavorites(imdbID)}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default connect(null, mapDispatchToProps)(MovieItem);
