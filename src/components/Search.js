import React, { Component } from "react";
import SearchList from "./SearchList";

class Search extends Component {
  state = {
    searches: [],
    isShowing: false
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
        this.setState({ searches: [...searches] });
      });
  }
  handleShowClick = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };
  generateSearchList = () =>
    this.state.searches.map(search => {
      return (
        <SearchList
          key={search.id}
          search={search}
          handleShowClick={this.handleShowClick}
          isShowing={this.state.isShowing}
        />
      );
    });

  render() {
    console.log(this.state.searches);
    return (
      <div className="console-wrapper">
        <div id="search-console">
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
