import React, { Component } from "react";

class SearchListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="search-item-wrapper">
        <div className="item-row">
          <div className="search-item-column"> {item.time} </div>
          <div className="search-item-column"> {item.price} </div>
          <div className="search-item-column"> {item.pickup_from} </div>
          <div className="search-item-column"> {item.purchase_url} </div>
        </div>
      </div>
    );
  }
}
export default SearchListItem;
// const SearchListItem = props => {
//   console.log(props);
//   const time = props.item.time.split("T");
//   const item = props.item;
//   return (
//     <div className="search-item-wrapper">
//       <div className="item-row">
//         <div className="search-item-column"> {item.time} </div>
//         <div className="search-item-column"> {item.price} </div>
//         <div className="search-item-column"> {item.pickup_from} </div>
//         <div className="search-item-column"> {item.purchase_url} </div>
//       </div>
//     </div>
//   );
// };
// export default SearchListItem;
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
