import React from "react";
import SearchListItem from "./SearchListItem";
const uuidv4 = require("uuid/v4");

const SearchList = (props) => {
  const renderSearches = () =>
    props.searches.map((search) => {
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const day = search.date.split("-")[2] % 7;
      return (
        <div className="s-c sch-cont">
          <div className="s-c sch-wrap">
            <div className="s-c sch-item row">{search.start_from}</div>
            <div className="s-c sch-item row">{search.to_destination}</div>
            <div className="s-c sch-item row">{weekday[day]}</div>
            <div className="s-c sch-item row">{search.date}</div>
            <div className="s-c sch-item row">{search.company}</div>
          </div>
          <SearchListItem
            userId={props.userId}
            key={uuidv4(search.id)}
            search={search}
            items={search.items}
            addToWatchlist={props.addToWatchlist}
          />
        </div>
      );
    });
  const renderSearchesHeaders = () => {
    return (
      <div className="s-c sch-cont header">
        <div className="s-c sch-wrap header">
          <div className="s-c sch-item header row">From </div>
          <div className="s-c sch-item header row">To </div>
          <div className="s-c sch-item header row">Day of week</div>
          <div className="s-c sch-item header row">Date</div>
          <div className="s-c sch-item header row">Company</div>
        </div>
      </div>
    );
  };
  return (
    <div className="table-content-wrapper">
      <div className="table-title sli">All Bus Times</div>
      {renderSearchesHeaders()}
      {renderSearches()}
    </div>
  );
};

export default SearchList;

// <div className="al-r">
//   <span role="img" className="folder-items-indicator">
//     {"  "}↳{"  "}
//   </span>
//   <div className="search-item-content-wrapper">
//     <div className="items-header">
//       <div className="item-row">
//         <div className="search-item-column-header">
//           <div className="item-content-label">Depart</div>
//         </div>
//         <div className="search-item-column-header">
//           <div className="item-content-label">Price</div>
//         </div>
//         <div className="search-item-column-header">
//           <div className="item-content-label">Website</div>
//         </div>
//         <div className="search-item-column-header">
//           <div className="item-content-label">Save to Watchlist</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// <div className="align-right-items">
//
//

// <tr>{generateItems()}</tr>

// <tr>
//   {props.isActive ? (
//     <div className="nested-items">
//       <div className="item-headers">
//         <span> Time </span>
//         <span> Price </span>
//         <span> Pick-Up </span>
//         <span> Purchase </span>
//       </div>
//
//     </div>
//   ) : null}
// </tr>

// {
//   !props.showing.includes(props.search) ? (
//     <>
//       {" "}
//       <button
//         onClick={e => {
//           props.handleShowItems(props.search);
//         }}
//         className="expand-search-btn"
//       >
//         <span role="img" className="expand-search-span">
//           {" "}
//           ✚{" "}
//         </span>
//       </button>
//     </>
//   ) : (
//     <>
//       {" "}
//       <button
//         onClick={e => {
//           props.handleHideItems(props.search);
//         }}
//         className="expand-search-btn"
//       >
//         <span role="img" className="close-search-span">
//           {" "}
//           ☞{" "}
//         </span>
//       </button>
//     </>
//   );
// }
