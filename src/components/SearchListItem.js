import React from "react";

const SearchListItem = props => {
  console.log(props);
  const item = props.item;
  return (
    <div className="item-row">
      <span> {item.time} </span>
      <span> {item.price} </span>
      <span> {item.pickup_from} </span>
      <span> {item.purchase_url} </span>
    </div>
  );
};
export default SearchListItem;
// <div className="search-info">Price: ${bus.price}</div>
// <div className="search-info">Time: {bus.bus_time}</div>
// <div className="search-info">Location: {bus.location}</div>
//
// <div>
//   <button
//     onClick={e => {
//       props.handleToggleItems(props.search);
//     }}
//     className="expand-search-btn"
//   >
//     <span role="img" className="expand-search-span">
//       {" "}
//       ⍖{" "}
//     </span>
//   </button>
// </div>
