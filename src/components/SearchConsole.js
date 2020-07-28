import React, { Component } from "react";
import ConsoleSearchInput from "./ConsoleSearchInput";
const uuidv4 = require("uuid/v4");

class SearchConsole extends Component {
  state = {
    error: "",
    searchParams: {
      date: "",
      start: "",
      destination: "",
      time: "",
    },
  };

  render() {
    return (
      <div id="search-console">
        <div className="render-search-console">
          <ConsoleSearchInput
            key={uuidv4()}
            handleSubmit={this.props.handleSubmit}
            items={this.props.items}
            watching={this.props.watching}
            handleWatching={this.props.handleWatching}
            results={this.props.results}
          />
        </div>
      </div>
    );
  }
}

export default SearchConsole;
