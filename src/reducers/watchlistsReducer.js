const defaultState = {
  watchlists: ["hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi"]
};

const watchlistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, watchlists: action.payload };
    case "RENDER_WATCHLIST":
      return { ...state.watchlists };
    default:
      return state;
  }
};

export default watchlistsReducer;
