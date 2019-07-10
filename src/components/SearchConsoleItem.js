import React from "react";

const SearchConsoleItem = props => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const item = item;
  // const date = item.search.date.split("-");
  // const day = date[2] % 7;

  return (
    <div className="console-item">
      <div className="cih-col">
        {item.search.start_from} -> {item.search.to_destination}
      </div>
      <div className="cih-col">hello</div>
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
            }}
          >
            Add to Watchlist
          </button>
        ) : (
          <button
            onClick={event => {
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
