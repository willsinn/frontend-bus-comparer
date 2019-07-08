import React from "react";
import SearchConsoleItem from "./SearchConsoleItem";
const uuidv4 = require("uuid/v4");

const SearchConsoleList = props => {
  let items = props.results;
  items === undefined ? (items = props.watching) : (items = props.results);
  const renderConsoleItems = () => {
    return items.map(item => (
      <SearchConsoleItem
        handleWatching={props.handleWatching}
        key={uuidv4(item.id)}
        item={item}
        handleRemoveWatching={props.handleRemoveWatching}
      />
    ));
  };
  console.log("SCL", props);

  return (
    <div className="content-wrapper wrapper">
      <div className="console-content-wrapper">
        <div className="console-item header">
          <div className="cih-col header">Watchlist</div>
          <div className="cih-col header">Day</div>
          <div className="cih-col header">Time</div>
          <div className="cih-col header">Price</div>
          <div className="cih-col header">Remove</div>
        </div>
        {renderConsoleItems()}
      </div>
    </div>
  );
};

export default SearchConsoleList;
