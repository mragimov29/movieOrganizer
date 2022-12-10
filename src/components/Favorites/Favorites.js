import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createList, removeFromFavorites } from "../../redux/actions/actions";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
  createList: (list) => createList(list),
});

function Favorites({ favorites, removeFromFavorites }) {
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
    document.querySelector(".nav-link").textContent = 'Перейти к списку';
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
            <li key={item.id}>
              {item.Title} ({item.Year})
              <button onClick={createListHandler}>X</button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="favorites__save"
        disabled={title === "" ? true : false}
        onClick={createListHandler}
      >
        Сохранить список
      </button>
      <Link className="nav-link" to="/list">
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
