import React, { Component } from "react";
import { connect } from "react-redux";
import { renderWatchlist } from "../actions/watchlist"

class Watchlist extends Component {
  state = {

  };
  render() {
    return <div className="watchlist-container">Hello from Watchlist</div>;
  }
}

const mapStateToProps = (reduxStoreState) = {
  return {
    renderWatchlist: reduxStoreState.watchlistsReducer.renderWatchlist
  }
}
export default connect(mapStateToProps)(Watchlist);
// const mapDispatchToProps = { fetchCurrentUser: fetchCurrentUser }
