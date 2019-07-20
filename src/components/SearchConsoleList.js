import React, { useState } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = props => {
  const [isShowing, setWatchlist] = useState(false);
  const items = props.results;
  const renderConsoleItems = () => {
    return items.map(item => (
      <SearchConsoleItem
        key={uuidv4(item.id)}
        item={item}
        handleWatching={props.handleWatching}
      />
    ));
  };

  const watchItems = props.watching;
  const renderWatchlistItems = () => {
    return watchItems.map(item => (
      <SearchConsoleItem
        key={uuidv4(item.id)}
        item={item}
        handleRemoveWatching={props.handleRemoveWatching}
      />
    ));
  };
  const renderHeader = () => {
    return (
      <div className="console-content-wrapper">
        <div className="console-item header">
          <div className="cih-col header">{"From -> To"}</div>
          <div className="cih-col header">Date</div>
          <div className="cih-col header">Time</div>
          <div className="cih-col header">Pick-Up From</div>
          <div className="cih-col header">Purchase</div>{" "}
          <div className="cih-col header">Company</div>
          <div className="cih-col header">Watchlist</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isShowing ? (
        <div className="watchlist-wrapper">
          {renderHeader()}
          {renderWatchlistItems()}
        </div>
      ) : null}
      {!isShowing ? (
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
      )}
      <div className="add-to-watchlist">{props.addMsg}</div>
      {props.results.length ? (
        <div className="search-content-wrapper">
          {renderHeader()}
          <div className="sch-ct-items wrap">{renderConsoleItems()}</div>
        </div>
      ) : null}
    </>
  );
};

export default SearchConsoleList;
