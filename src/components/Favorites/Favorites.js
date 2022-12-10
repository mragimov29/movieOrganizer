import React, { useState } from "react";
import { connect } from "react-redux";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function Favorites({favorites}) {
  const [title, setTitle] = useState("Новый список");

  return (
    <div className="favorites">
      <input value={title} className="favorites__name" />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li key={item.id}>
              {item.title} ({item.year})
              <button>X</button>
            </li>
          );
        })}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(Favorites);
