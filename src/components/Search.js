import React, { Component } from "react";
import SearchList from "./SearchList";
import SearchConsole from "./SearchConsole";

class Search extends Component {
  state = {
    searches: [],
    showing: [],
    items: []
  };
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/searches", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    })
      .then(r => r.json())
      .then(searches => {
        this.setState({
          searches: searches
        });
      });
    fetch("http://localhost:3000/api/v1/items", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    })
      .then(r => r.json())
      .then(items => {
        console.log(items);
        this.setState({ items: items });
      });
  }
  handleShowItems = targetValue => {
    this.setState({ showing: [targetValue] });
  };
  handleHideItems = targetValue => {
    this.setState({
      showing: []
    });
  };
  generateSearchList = () =>
    this.state.searches.map(search => {
      return (
        <SearchList
          key={search.id}
          search={search}
          handleShowItems={this.handleShowItems}
          handleHideItems={this.handleHideItems}
          showing={this.state.showing}
        />
      );
    });

  render() {
    return (
      <div className="console-wrapper">
        <SearchConsole
          searches={this.state.searches}
          items={this.state.items}
        />
        <div id="search-table">
          <div className="search-wrapper">
            <div className="table-wrapper">
              <div className="column-headers">
                <div className="console-column header"> Date: </div>
                <div className="console-column header"> From: </div>
                <div className="console-column header"> To: </div>
                <div className="console-column header"> Company: </div>
              </div>
              {this.generateSearchList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
