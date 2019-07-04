import React, { Component } from "react";
import ConsoleFilterFns from "./ConsoleFilterFns";

class SearchConsole extends Component {
  state = {
    console: []
  };
  render() {
    console.log(this.props.searches);
    return (
      <div id="search-console">
        <ConsoleFilterFns />
        <div className="render-search-console" />
      </div>
    );
  }
}

export default SearchConsole;
