import React, { useState } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = (props) => {
  const renderConsoleItems = (arr) => {
    if (arr && arr.length > 0) {
      let counter = 0;
      return arr.map((item) => {
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
    }
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
      {props.results && props.results.length > 0 ? (
        <div className="search-content-wrapper">
          <div className="center">{renderConsoleItems(props.results)}</div>
        </div>
      ) : (
        <div className="search-content-wrapper" style={{ border: "0" }}>
          <div className="center">{renderConsoleItems(props.items)}</div>
        </div>
      )}
    </>
  );
};

export default SearchConsoleList;
// {!props.open ? (

//   ) : (
//     <div className="watchlist-wrapper">{renderWatchlistItems()}</div>
//   )}
