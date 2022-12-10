import React, { useState } from "react";
import { connect } from "react-redux";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function Favorites(props) {
  const [title, setTitle] = useState("Новый список");

  return (
    <div className="favorites">
      <input value="Новый список" className="favorites__name" />
      <ul className="favorites__list">
        {props.favorites.map((item) => {
          return (
            <li key={item.id}>
              {item.title} ({item.year})
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
