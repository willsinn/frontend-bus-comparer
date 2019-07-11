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
          <div className="cih-col header">Remove</div>
        </div>
      </div>
    );
  };
  console.log(isShowing);
  console.log(props);
  return (
    <>
      <div>
        <button
          className="toggle-watchlist btn"
          onClick={() => setWatchlist(!isShowing)}
        >
          View Watchlist
        </button>
      </div>
      <div className="content-wrapper wrapper">
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
    </>
  );
};

export default SearchConsoleList;
