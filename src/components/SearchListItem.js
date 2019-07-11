import React from "react";

const SearchListItem = props => {
  const fetchPostWatching = item => {
    console.log(item);
    return fetch("http://localhost:3000/api/v1/favorites", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: {
        user_id: props.userId,
        price: item.price,
        time: item.time,
        pickup_from: item.pickup_from,
        purchase_url: item.purchase_url,
        company: props.search.company,
        start_from: props.search.start_from,
        to_destination: props.search.to_destination,
        date: props.search.date,
        purchased: false
      }
    }).then(console.log);
  };
  const renderItems = () => {
    const search = props.search;

    return props.items.map(item => {
      return (
        <div className="s-i item-cont">
          <div className="s-i item-wrap">
            <div className="panel-info s-i item">{item.time}</div>
            <div className="panel-info s-i item">{item.pickup_from}</div>
            <div className="panel-info s-i item">{item.price}</div>
            <div className="s-i item purchase-btn">
              <form action={item.purchase_url}>
                <input type="submit" value="Purchase Ticket" />
              </form>
            </div>
            <div className="panel-info s-i item">
              <button
                className="panel-info s-i item"
                onClick={() => {
                  props.addToWatchlist(props, item);
                  {
                    fetchPostWatching(item);
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="s-i item-cont header">
      <div className="s-i item-wrap header">
        <div className="s-i item header panel-header">Time </div>
        <div className="s-i item header panel-header">Pickup </div>
        <div className="s-i item header panel-header">Price</div>
        <div className="s-i item header panel-header">Purchase</div>
        <div className="s-i item header panel-header">Add to Watchlist</div>
      </div>
      {renderItems()}
    </div>
  );
};
export default SearchListItem;

//
// <div className="search-item-wrapper">
//   <div className="item-row">
//     <div className="search-item-column">
//       <div className="item-content">{item.time}</div>
//     </div>
//     <div className="search-item-column">
//       <div className="item-content">${item.price}</div>
//     </div>
//     <div className="search-item-column">
//       <form action={item.purchase_url}>
//         <input type="submit" value="Purchase Ticket" />
//       </form>
//     </div>
//     <div className="search-item-column">Add to watchlist</div>
//   </div>
// </div>
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
