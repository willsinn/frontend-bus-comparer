import React from "react";

const ConsoleFilterFns = props => {
  console.log("consolefilter", props);
  // Search cheapest prices with appropriate from-to-date-time
  const handleFilterOptions = () => {
    const route = props.searches.filter(
      search =>
        props.searchParams.start === search.start_from &&
        props.searchParams.destination === search.to_destination
    );

    if (props.searchParams.date && route !== []) {
      const filterDate = route.filter(
        search => props.searchParams.date === search.date
      );

      if (props.searchParams.time && filterDate !== []) {
        filterDate.map(date => {
          const filterTime = date.items.filter(
            item => props.searchParams.time === item.time
          );
          console.log(filterTime);
          return filterTime;
        });
      }
    }
  };
  const handleCurrentTimeClick = ({}) => {};

  return (
    <div>
      <button
        onClick={e => {
          handleFilterOptions(props.searches);
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
