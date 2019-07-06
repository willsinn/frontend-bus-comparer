export const addItem = item => {
  return dispatch => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
};
export const renderWatchlist = () => ({
  type: "RENDER_WATCHLIST",
  payload: watchlists
});
