import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./ListPage.css";

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

function ListPage({ list }) {
  console.log(list);
  return (
    <div className="list-page">
      <h1 className="list-page__title">{list.title}</h1>
      <ul>
        {list.movies.map((item) => {
          return (
            <li key={item.id}>
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
