import React from "react";

const SearchConsoleItem = props => {
  return (
    <div id="console-item">
      <div className="console-result-item-wrapper">
        <button>
          {" "}
          <span>⭒</span>{" "}
        </button>
        <div className="console-result-item">
          <div>{props.route}</div>

          <div>{props.result.time}</div>
          <div>{props.result.price}</div>
        </div>
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
