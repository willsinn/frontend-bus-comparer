import React, { Component } from "react";
import ConsoleFilterFns from "./ConsoleFilterFns";

class SearchConsole extends Component {
  state = {
    console: [],
    searchParams: {
      date: "2019-07-12",
      start: "NY, NY",
      destination: "Maryland",
      time: "03:00"
    }
  };
  render() {
    console.log(this.props.searches);
    return (
      <div id="search-console">
        <ConsoleFilterFns
          searches={this.props.searches}
          searchParams={this.state.searchParams}
        />
        <div className="render-search-console" />
      </div>
    );
  }
}

export default SearchConsole;
