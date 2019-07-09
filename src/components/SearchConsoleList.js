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
          <div className="cih-col header">Watchlist</div>
          <div className="cih-col header">Day</div>
          <div className="cih-col header">Time</div>
          <div className="cih-col header">Price</div>
          <div className="cih-col header">Remove</div>
        </div>
      </div>
    );
  };
  console.log(isShowing);
  return (
    <div className="content-wrapper wrapper">
      <div className="toggle-watchlist btn">
        <button onClick={() => setWatchlist(!isShowing)}>View Watchlist</button>
      </div>
      {isShowing ? (
        <>
          {renderHeader()}
          {renderWatchlistItems()}
        </>
      ) : null}
      {props.results.length ? (
        <>
          {renderHeader()}
          {renderConsoleItems()}
        </>
      ) : null}
    </div>
  );
};

export default SearchConsoleList;
