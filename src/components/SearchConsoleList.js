import React, { useState } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = (props) => {
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
    let counter = 0;

    return watchItems.map((item) => {
      counter++;
      return (
        <SearchConsoleItem
          key={uuidv4(item.id)}
          item={item}
          handleRemoveWatching={props.handleRemoveWatching}
          counter={counter}
        />
      );
    });
  };

  return (
    <>
      {/* <div className="add-to-watchlist">{props.addMsg}</div> */}
      {!props.open ? (
        <div className="body-container">
          <div className="search-content-wrapper">
            <div className="center">{renderConsoleItems()}</div>
          </div>
        </div>
      ) : (
        <div className="watchlist-wrapper">{renderWatchlistItems()}</div>
      )}
    </>
  );
};

export default SearchConsoleList;
