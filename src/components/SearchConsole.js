import React, { Component } from "react";
import ConsoleFilterFns from "./ConsoleFilterFns";

class SearchConsole extends Component {
  state = {
    console: []
  };
  render() {
    console.log(this.props.searches);
    return <></>;
  }
}

export default SearchConsole;
