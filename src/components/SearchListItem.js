import React from "react";

const SearchListItem = props => {
  console.log(props);
  const time = props.item.time.split("T");
  const item = props.item;

  return (
    <div className="search-item-wrapper">
      <div className="item-row">
        <div className="search-item-column">
          <div className="item-content">{item.time}</div>
        </div>
        <div className="search-item-column">
          <div className="item-content">${item.price}</div>
        </div>
        <div className="search-item-column">
          <form action={item.purchase_url}>
            <input type="submit" value="Purchase Ticket" />
          </form>
        </div>
        <div className="search-item-column">Add to watchlist</div>
      </div>
    </div>
  );
};
export default SearchListItem;

// {!this.state.isViewing ? (
// <div className="search-item-info btn">
//   {" "}
//   <button
//     onClick={e => {
//       this.handleClick(this.props.item);
//     }}
//     className="expand-search-btn"
//   >
//     <span role="img" className="expand-search-span">
//       {" "}
//       ✚{" "}
//     </span>
//   </button>
// </div>
// ) : (
//   <div className="search-item-wrapper">
//     <div className="item-row">
//       <div className="search-item-column"> {item.time} </div>
//       <div className="search-item-column"> {item.price} </div>
//       <div className="search-item-column"> {item.pickup_from} </div>
//       <div className="search-item-column"> {item.purchase_url} </div>
//     </div>
//   </div>
// )}
// </>

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
