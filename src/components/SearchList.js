import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = props => {
  const list = props.search;
  // const generateItems = () =>
  //   list.items.map(item => <SearchListItem key={item.id} item={item} />);
  return (
    <tr className="search-date-row">
      <td>
        <span role="img" className="expand-search-btn">
          {" "}
          ⍖{" "}
        </span>
      </td>
      <td>{list.date}</td>
      <td>{list.start_from}</td>
      <td>{list.to_destination}</td>
      <td>{list.company}</td>
    </tr>
  );
};

export default SearchList;
