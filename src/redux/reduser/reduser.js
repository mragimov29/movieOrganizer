const initialState = {
  favorites: [],
  movies: [],
  list: [],
  id: "",
  disabled: false,
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
      favorites.splice(index, 1);

      return {
        ...state,
        favorites,
      };
    case "ADD_TO_LIST":
      let movies = action.payload.data.Search;

      return {
        ...state,
        movies,
      };
    case "CREATE_ID":
      let id = action.payload.id;

      return {
        ...state,
        id,
      }
    case "DISABLED":
      let disabled = action.payload.bool;

      return {
        ...state,
        disabled,
      };
    default:
      return state;
  }
}
