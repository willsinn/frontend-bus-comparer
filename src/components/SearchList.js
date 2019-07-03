import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = props => {
  const searchList = props.search;
  const generateItems = () =>
    searchList.items.map(item => (
      <td>
        <SearchListItem key={item.id} item={item} />
      </td>
    ));
  return (
    <tr className="search-date-row">
      <td>
        <button
          onClick={e => {
            props.handleToggleItems(props.search);
          }}
          className="expand-search-btn"
        >
          <span role="img" className="expand-search-span">
            {" "}
            ⍖{" "}
          </span>
        </button>
      </td>
      <td>{searchList.date}</td>
      <td>{searchList.start_from}</td>
      <td>{searchList.to_destination}</td>
      <td>{searchList.company}</td>
      {props.isActive ? generateItems() : null}
    </tr>
  );
};

export default SearchList;
