import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./ListPage.css";

const mapStateToProps = (state) => {
  return {
    movies: state.list,
  };
};

function ListPage({ movies }) {
  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                target="_blank"
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps)(ListPage);
