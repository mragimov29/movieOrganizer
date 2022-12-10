export function addToFavorites(id) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: {
      id: id,
    },
  };
}

export function removeFromFavorites(id) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: {
      id: id,
    },
  };
}
