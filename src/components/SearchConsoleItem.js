import React from "react";
import Greyhound from "../images/greyhound.jpg";

const SearchConsoleItem = (props) => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const item = props.item;
  const fetchPostWatching = (item) => {
    console.log(item);
    return fetch(
      "https://backend-final-project.herokuapp.com/api/v1/favorites",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
          purchased: false,
        },
      }
    );
  };
  const renderBusIcon = () => {
    switch (item.search.company) {
      case "greyhound":
        return <img src={Greyhound} alt="" className="bus-icon" />;

      default:
        break;
    }
  };
  return (
    <div className="console-item">
      {props.handleWatching !== undefined ? (
        <button
          className="watch-btn"
          onClick={(e) => props.handleWatching(item)}
        >
          ✔︎
        </button>
      ) : (
        <button
          className="watch-btn"
          onClick={(e) => props.handleRemoveWatching(item)}
        >
          ✖︎
        </button>
      )}
      <div>{props.counter}</div>

      <div className="center">
        <div>{item.search.start_from}</div>
        <div>{item.search.to_destination}</div>
      </div>
      <div className="center">
        <div className="cih-col">{item.time}</div>
        <div className="cih-col">{item.search.date}</div>
      </div>
      <div className="cih-col">${item.price}</div>
      <div className="cih-col">{renderBusIcon()}</div>
      <div className="purchase-btn">
        <form style={{ margin: "0" }} action={item.purchase_url}>
          <input type="submit" value="Buy" />
        </form>
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
