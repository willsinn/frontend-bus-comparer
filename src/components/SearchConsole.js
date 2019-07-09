import React, { Component } from "react";
import SearchConsoleForm from "./SearchConsoleForm";
import ConsoleSearchInput from "./ConsoleSearchInput";
const uuidv4 = require("uuid/v4");

class SearchConsole extends Component {
  state = {
    error: "",
    searchParams: {
      date: "",
      start: "",
      destination: "",
      time: ""
    }
  };
  // handleSearchSubmit = searchParams => {
  //   this.setState({ searchParams: searchParams });
  //   const route = this.filterRoute(searchParams);
  //   const date = this.filterDate(searchParams);
  //   const time = this.filterTime(searchParams);
  //
  //   this.setState({ results: [...this.props.results.concat(time)] });
  // };
  //
  // filterRoute = params => {
  //   return this.props.searches.filter(
  //     search =>
  //       search.start === params.start_from &&
  //       search.destination === params.to_destination
  //   );
  // };
  // filterDate = params => {
  //   return this.props.searches.filter(search => search.date === params.date);
  // };
  // filterTime = params => {
  //   const array = [];
  //   this.props.searches.forEach(search => {
  //     const company = search.company;
  //     search.items.forEach(item => {
  //       if (item.time === params.time) {
  //         array.push({ item, company });
  //       }
  //     });
  //   });
  //   return array;
  // };

  render() {
    console.log(this.props.itemsValues);
    return (
      <div id="search-console">
        <div className="render-search-console">
          <ConsoleSearchInput
            key={uuidv4()}
            handleSubmit={this.props.handleSubmit}
            items={this.props.items}
          />
        </div>
      </div>
    );
  }
}

export default SearchConsole;

// renderConsoleItems = searchParams => {
//   const date = this.state.searchParams.date.split("-");
//   const day = date[2] % 7;
//   return this.state.results.map(result => (
//     <SearchConsoleItem
//       handleWatching={this.props.handleWatching}
//       key={uuidv4(result.id)}
//       date={this.state.searchParams.date}
//       day={day}
//       result={result}
//       handleDeleteItem={this.handleDeleteItem}
//       handleRenderClick={this.handleRenderClick}
//     />
//   ));
// };
// <div className="content-wrapper wrapper">
//   <div className="console-content-wrapper">
//     <div className="console-item header">
//       <div className="cih-col header">Watchlist</div>
//       <div className="cih-col header">Day</div>
//       <div className="cih-col header">Time</div>
//       <div className="cih-col header">Price</div>
//       <div className="cih-col header">Remove</div>
//     </div>
//     {this.renderConsoleItems()}
//   </div>
// </div>;

// fetch("http://localhost:3000/api/v1/items", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${localStorage.jwt}`
//   }
// })
//   .then(r => r.json())
//   .then(items => {
//     const itemsValues = flattenItemKeyValues(items);
//     this.setState({ items: items, itemsValues: itemsValues });
//   });

//
//
//
// <SearchConsoleForm
//   key={uuidv4()}
//   searches={this.props.searches}
//   items={this.props.items}
//   handleSearchSubmit={this.handleSearchSubmit}
// />
