import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = props => {
  const searchList = props.search;
  const generateItems = () =>
    searchList.items.map(item => <SearchListItem key={item.id} item={item} />);
  return (
    <div className="console-content-wrapper">
      <div className="console-column content">{searchList.date}</div>
      <div className="console-column content">{searchList.start_from}</div>
      <div className="console-column content">{searchList.to_destination}</div>
      <div className="console-column content">{searchList.company}</div>
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
