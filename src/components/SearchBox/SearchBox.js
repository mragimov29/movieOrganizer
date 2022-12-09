import React, { useState } from "react";
import "./SearchBox.css";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");

  const getData = async (title, apiKey) => {
    let response = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
    );
    let data = response.json();
    return data;
  };

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    const apiKey = '40acc25e';
    getData(searchLine, apiKey)
    .then(res=> {
      console.log(res)
    })
    .catch(err => alert(err));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
