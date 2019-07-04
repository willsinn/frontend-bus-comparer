import React from "react";

const ConsoleFilterFns = props => {
  console.log(props);
  // const handleTimeClick = () => {};
  const handlePriceClick = () => {};
  return (
    <div>
      <button
        onClick={e => {
          handlePriceClick();
        }}
      >
        {" "}
        Price{" "}
      </button>
    </div>
  );
};

export default ConsoleFilterFns;
// <button onClick={handleTimeClick()}>
//   {" "}
//   Returns All Search-Items with specified time
// </button>;
