import React from "react";

const SearchConsoleItem = props => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log("console item", props.result);
  return <div className="console-item" />;
  //1. Start-Destination
  //2. Date-Time
  //3. pickup_from
  //4. Price
  //5. purchase_url
  //6. company
};
export default SearchConsoleItem;
