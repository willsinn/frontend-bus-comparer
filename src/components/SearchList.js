import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = props => {
  const searchList = props.search;
  const generateItems = () =>
    props.search.items.map(item => {
      return <SearchListItem key={item.id} item={item} />;
    });
  return (
    <div className="console-content-wrapper">
      <div className="search-content-wrapper">
        <div className="console-column content">{searchList.date}</div>
        <div className="console-column content">{searchList.start_from}</div>
        <div className="console-column content">
          {searchList.to_destination}
        </div>
        <div className="console-column content">{searchList.company}</div>
      </div>
      <div className="align-right-items">
        <div className="search-item-content-wrapper">
          {!props.showing.includes(props.search) ? (
            <div className="search-item-info btn">
              {" "}
              <button
                onClick={e => {
                  props.handleShowItems(props.search);
                }}
                className="expand-search-btn"
              >
                <span role="img" className="expand-search-span">
                  {" "}
                  ✚{" "}
                </span>
              </button>
            </div>
          ) : (
            <>{generateItems()}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
// {
//   generateItems();
// }

// <tr>{generateItems()}</tr>

// <tr>
//   {props.isActive ? (
//     <div className="nested-items">
//       <div className="item-headers">
//         <span> Time </span>
//         <span> Price </span>
//         <span> Pick-Up </span>
//         <span> Purchase </span>
//       </div>
//
//     </div>
//   ) : null}
// </tr>
