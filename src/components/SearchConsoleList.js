import React, { useState } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = (props) => {
  const [isShowing, setWatchlist] = useState(false);
  const items = props.results;
  const renderConsoleItems = () => {
    let counter = 0;

    return items.map((item) => {
      counter++;
      return (
        <SearchConsoleItem
          key={uuidv4(item.id)}
          item={item}
          handleWatching={props.handleWatching}
          counter={counter}
        />
      );
    });
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
      <div className="add-to-watchlist">{props.addMsg}</div>
      <div className="body-container">
        {props.results.length ? (
          <div className="search-content-wrapper">
            <div className="center">{renderConsoleItems()}</div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchConsoleList;
