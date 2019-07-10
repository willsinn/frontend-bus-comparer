import React from "react";
import SearchListItem from "./SearchListItem";
const uuidv4 = require("uuid/v4");

const SearchList = props => {
  console.log(props);
  const renderSearches = () =>
    props.items.map(item => {
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const search = item.search;

      return (
        <SearchListItem
          key={search.uuidv4}
          search={item.search}
          items={props.items}
          handleWatching={props.handleWatching}
        />
      );
    });
  const renderSearchesHeaders = () => {
    return (
      <div className="s-c sch-cont header">
        <div className="s-c sch-wrap header">
          <div className="s-c sch-item header">From </div>
          <div className="s-c sch-item header">To </div>
          <div className="s-c sch-item header">Day of week</div>
          <div className="s-c sch-item header">Date</div>
          <div className="s-c sch-item header">Company</div>
        </div>
      </div>
    );
  };

  console.log(props);
  return (
    <div className="table-content-wrapper">
      {renderSearchesHeaders()}
      {renderSearches()}
    </div>
  );
};

export default SearchList;

//   <div className="s-c sch-cont">
//   <div className="s-c sch-wrap">
//     <div className="s-c sch-item">{item.search.start_from}</div>
//     <div className="s-c sch-item">{item.search.to_destination}</div>
//     <div className="s-c sch-item">{weekday[day]}</div>
//     <div className="s-c sch-item">{item.search.date}</div>
//     <div className="s-c sch-item">{item.search.company}</div>
//   </div>
// </div>
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
