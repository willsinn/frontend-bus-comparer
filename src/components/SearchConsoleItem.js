import React from "react";

const SearchConsoleItem = props => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div
      onClick={e => {
        props.handleRenderClick(props.result);
      }}
      className="console-item"
    >
      <div className="cih-col">
        <button>
          {" "}
          <span>⭒</span>{" "}
        </button>
      </div>
      <div className="cih-col">{weekday[props.day]}</div>
      <div className="cih-col">{`${props.date[1]}-${props.date[2]}`}</div>
      <div className="cih-col">{props.result.item.time}</div>
      <div className="cih-col">{props.result.item.price}</div>
      <div className="cih-col">
        <button
          onClick={e => {
            props.handleDeleteItem(props.result);
          }}
        >
          {" "}
          delete{" "}
        </button>
      </div>
    </div>
  );
};
export default SearchConsoleItem;
