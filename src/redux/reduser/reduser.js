const initialState = {
  favorites: [{ imdbID: "tt0068646", title: "The Godfather", year: 1972 }],
  movies: [
    {
      imdbID: "tt3896198",
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0068646",
      title: "The Godfather",
      year: 1972,
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ],
};

export default function reducer(state = initialState, action) {
  let favorites = [];
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const movie = state.movies.find(
        (item) => item.imdbID === action.payload.id
      );

      favorites = [...state.favorites, movie];

      return {
        ...state,
        favorites,
      };
    case "REMOVE_FROM_FAVORITES":
      favorites = [...state.favorites];
      
      let find = state.favorites.find(
        (item) => item.imdbID === action.payload.id
      );
      let index = state.favorites.indexOf(find);

      return {
        ...state,
        favorites,
      };
    default:
      return state;
  }
}
