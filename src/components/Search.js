import React, { Component } from "react";
import SearchList from "./SearchList";

class Search extends Component {
  state = {
    searches: []
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
        this.setState({ searches });
      });
  }
  generateSearchList = () =>
    this.state.searches.map(search => {
      return <SearchList key={search.id} search={search} />;
    });

  render() {
    console.log(this.state.searches);
    return (
      <div className="console-wrapper">
        <div id="search-console">
          <div className="search-wrapper">
            <table className="search-date-table">
              <tbody>
                <tr className="search-date-row">
                  <th />
                  <th> Date </th>
                  <th> From Location </th>
                  <th> To Destination </th>
                  <th> Company </th>
                </tr>
                {this.generateSearchList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
