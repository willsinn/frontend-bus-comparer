import React from "react";

const SearchListItem = props => {
  const fetchPostWatching = item => {
    console.log(item);
    return fetch(
      "https://backend-final-project.herokuapp.com/api/v1/favorites",
      {
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
      }
    ).then(console.log);
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
