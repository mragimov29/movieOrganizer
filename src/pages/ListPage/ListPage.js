import React, {useEffect, useState, useParams} from "react";
import { connect } from "react-redux";
import "./ListPage.css";

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

function ListPage({ id }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
    .then(res => res.json())
    .then(data => {
      setList(data)
    });
  });

  if(list.length === 0) return true;

  return (
    <div className="list-page">
      <h1 className="list-page__title">{list.title}</h1>
      <ul>
        {list.movies.map((item) => {
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
