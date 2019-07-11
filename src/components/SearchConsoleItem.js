import React from "react";

const SearchConsoleItem = props => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const item = props.item;
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
  return (
    <div className="console-item">
      <div className="cih-col">
        {item.search.start_from} -> {item.search.to_destination}
      </div>
      <div className="cih-col">{item.search.date}</div>
      <div className="cih-col">{item.pickup_from}</div>
      <div className="cih-col">{item.price}</div>
      <div className="cih-col purchase-btn">
        <form action={item.purchase_url}>
          <input type="submit" value="Purchase Ticket" />
        </form>
      </div>
      <div className="cih-col">{item.search.company}</div>
      <div className="cih-col">
        {props.handleWatching !== undefined ? (
          <button
            onClick={event => {
              props.handleWatching(item);
              {
                fetchPostWatching(item);
              }
            }}
          >
            Add to Watchlist
          </button>
        ) : (
          <button
            onClick={() => {
              props.handleRemoveWatching(item);
            }}
          >
            Remove from Watchlist
          </button>
        )}
      </div>
    </div>
  );
  //1. Start-Destination
  //2. Date-day
  //3. Time
  //4. pickup_from
  //5. Price
  //6. purchase_url
  //7. company
};
export default SearchConsoleItem;
