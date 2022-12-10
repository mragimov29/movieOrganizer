import React, { Component, useEffect, useState } from "react";
import { addToFavorites } from "../../redux/actions/actions";
import { connect } from "react-redux";
import "./MovieItem.css";

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id))
});

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function MovieItem({ Title, Year, Poster, imdbID, addToFavorites, favorites }) { 
  let [dis, setDis] = useState(false)

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={() => {addToFavorites(imdbID)}}
          disabled={dis}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
