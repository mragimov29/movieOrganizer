import React, { Component, useEffect, useState } from "react";
import { addToFavorites } from "../../redux/actions/actions";
import { connect } from "react-redux";
import "./MovieItem.css";

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id)),
});

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    disabled: state.disabled,
  };
};

function MovieItem({
  disabled,
  Title,
  Year,
  Poster,
  imdbID,
  addToFavorites,
  favorites,
}) {
  let [dis, setDis] = useState(false);

  useEffect(() => {
    if (disabled) setDis(true);

    let button = document.querySelectorAll(".fav_button");
    if (button != null) {
      button.forEach((el) => {
        if (el.previousSibling.innerText.split(" (")[0] === Title) setDis(true);
        el.addEventListener("click", (e) => {
          if (e.target.previousSibling.innerText.split(" (")[0] === Title)
            return setDis(false);
        });
      });
    }
  });

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
            onClick={() => {
              addToFavorites(imdbID);
            }}
            disabled={dis}
          >
            {dis ? "Добавлено" : "Добавить в список"}
          </button>
        </div>
    </article>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
