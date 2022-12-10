import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/actions";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

function Favorites({ favorites, removeFromFavorites }) {
  const [title, setTitle] = useState("Новый список");

  return (
    <div className="favorites">
      <input value={title} className="favorites__name" />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li key={item.id}>
              {item.title} ({item.year})
              <button onClick={() => removeFromFavorites(item.imdbID)}>X</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
