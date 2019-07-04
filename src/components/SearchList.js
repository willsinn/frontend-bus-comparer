import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = props => {
  const searchList = props.search;
  const generateItems = () =>
    props.search.items.map(item => {
      return <SearchListItem key={item.id} item={item} />;
    });
  return (
    <div className="table-content-wrapper">
      <div
        className="search-content-wrapper"
        style={
          !props.showing.includes(props.search)
            ? {}
            : { border: "4px double blue" }
        }
      >
        {!props.showing.includes(props.search) ? (
          <>
            {" "}
            <button
              onClick={e => {
                props.handleShowItems(props.search);
              }}
              className="expand-search-btn"
            >
              <span role="img" className="expand-search-span">
                {" "}
                ✚{" "}
              </span>
            </button>
          </>
        ) : (
          <>
            {" "}
            <button
              onClick={e => {
                props.handleHideItems(props.search);
              }}
              className="expand-search-btn"
            >
              <span role="img" className="close-search-span">
                {" "}
                ☞{" "}
              </span>
            </button>
          </>
        )}
        <div className="console-column content">{searchList.date}</div>
        <div className="console-column content">{searchList.start_from}</div>
        <div className="console-column content">
          {searchList.to_destination}
        </div>
        <div className="console-column content">{searchList.company}</div>
      </div>
      <div className="align-right-items">
        <div className="al-r">
          {props.showing.includes(props.search) ? (
            <>
              <span role="img" className="folder-items-indicator">
                {"  "}↳{"  "}
              </span>
              <div className="search-item-content-wrapper">
                <div className="items-header">
                  <div className="item-row">
                    <div className="search-item-column-header">
                      <div className="item-content-label">Depart</div>
                    </div>
                    <div className="search-item-column-header">
                      <div className="item-content-label">Price</div>
                    </div>
                    <div className="search-item-column-header">
                      <div className="item-content-label">Website</div>
                    </div>
                    <div className="search-item-column-header">
                      <div className="item-content-label">
                        Save to Watchlist
                      </div>
                    </div>
                  </div>
                </div>
                {generateItems()}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchList;

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
