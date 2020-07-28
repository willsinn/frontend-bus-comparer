import React, { useState } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = (props) => {
  const [isShowing, setWatchlist] = useState(false);
  const items = props.results;
  const renderConsoleItems = () => {
    return items.map((item) => (
      <SearchConsoleItem
        key={uuidv4(item.id)}
        item={item}
        handleWatching={props.handleWatching}
      />
    ));
  };

  const watchItems = props.watching;
  const renderWatchlistItems = () => {
    return watchItems.map((item) => (
      <SearchConsoleItem
        key={uuidv4(item.id)}
        item={item}
        handleRemoveWatching={props.handleRemoveWatching}
      />
    ));
  };

  return (
    <>
      {isShowing ? (
        <div className="watchlist-wrapper">{renderWatchlistItems()}</div>
      ) : null}
      {/* {!isShowing ? (
        <button
          className="toggle-watchlist btn"
          onClick={() => setWatchlist(!isShowing)}
        >
          View Watchlist
        </button>
      ) : (
        <button
          className="toggle-watchlist btn"
          onClick={() => setWatchlist(!isShowing)}
        >
          Minimize Watchlist
        </button>
      )} */}
      <div className="add-to-watchlist">{props.addMsg}</div>
      {props.results.length ? (
        <div className="search-content-wrapper">{renderConsoleItems()}</div>
      ) : null}
    </>
  );
};

export default SearchConsoleList;
