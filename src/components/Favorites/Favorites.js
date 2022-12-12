import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createId, removeFromFavorites, setDisabled } from "../../redux/actions/actions";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    disabled: state.disabled,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
  createId: (id) => dispatch(createId(id)),
  setDisabled: (bool) => dispatch(setDisabled(bool))
});

function Favorites({ favorites, disabled, removeFromFavorites, createId, setDisabled }) {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const createListHandler = () => {
    document.querySelector(".favorites__name").readOnly = true;
    document
      .querySelector(".favorites__list")
      .querySelectorAll("button")
      .forEach((item) => {
        item.remove();
      });

    document.querySelector(".favorites__save").remove();
    document.querySelector(".nav-link").textContent = "Перейти к списку";

    let list = {
      title: title,
      movies: favorites,
    };

    fetch("https://acb-api.algoritmika.org/api/movies/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((response) => response.json())
      .then((data) => {
        createId(data.id); 
      });
  };

  return (
    <div className="favorites">
      <input
        placeholder="Новый список"
        value={title}
        onChange={titleChangeHandler}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li key={item.imdbID}>
              <p>{item.Title} ({item.Year})</p>
              <button
                className="fav_button"
                onClick={() => {
                  removeFromFavorites(item.imdbID);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="favorites__save"
        disabled={title !== "" && (favorites.length >= 1) ? false : true }
        onClick={() => {
          createListHandler();
        }}
      >
        Сохранить список
      </button>
      <Link className="nav-link" to="/list"></Link>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
