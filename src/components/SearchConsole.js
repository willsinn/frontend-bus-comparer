import React, { Component } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
import SearchConsoleForm from "./SearchConsoleForm";

class SearchConsole extends Component {
  state = {
    results: [],
    searchParams: {
      date: "2019-07-12",
      start: "NY, NY",
      destination: "Maryland",
      time: "03:00"
    }
  };
  handleSearchSubmit = searchParams => {
    const params = searchParams;
    this.setState({ searchParams: searchParams });
    // this.handleFilterOptions();
    const route = this.filterRoute(params);
    const date = this.filterDate(params);
    const time = this.filterTime(params);

    this.setState({ results: [...this.state.results.concat(time)] });
  };

  renderConsoleItems = () => {
    return this.state.results.map(result => (
      <SearchConsoleItem key={result.id} result={result} />
    ));
  };
  filterRoute = params => {
    return this.props.searches.filter(
      search =>
        search.start === params.start_from &&
        search.destination === params.to_destination
    );
  };
  filterDate = params => {
    return this.props.searches.filter(search => search.date === params.date);
  };
  filterTime = params => {
    const array = [];
    this.props.searches.forEach(search => {
      search.items.forEach(item => {
        if (item.time === params.time) {
          array.push(item);
        }
      });
    });
    return array;
  };

  render() {
    console.log(this.state.results);
    return (
      <div id="search-console">
        <SearchConsoleForm handleSearchSubmit={this.handleSearchSubmit} />
        <div className="render-search-console">
          <div className="items-header">
            <div>{this.state.searchParams.date}</div>
            <div>{this.state.searchParams.start}</div>
            <div>{this.state.searchParams.start}</div>
          </div>

          <div className="console-content-wrapper">
            {this.renderConsoleItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchConsole;
