import React, { Component } from "react";
import SearchConsole from "./SearchConsole";
import SearchConsoleList from "./SearchConsoleList";
const uuidv4 = require("uuid/v4");

class Search extends Component {
  state = {
    items: [],
    itemsValues: [],
    watching: [],
    watchlistShowing: false
  };
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/items", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    })
      .then(r => r.json())
      .then(items => {
        const itemsValues = flattenItemKeyValues(items);
        this.setState({ items: items, itemsValues: itemsValues });
      });
    const flattenItemKeyValues = items => {
      let itemsData = [...items].flat();
      itemsData = itemsData.map(itemD => {
        let vals = Object.entries(itemD);
        return vals.flat();
      });
      itemsData = itemsData.map(itemD => {
        let i = itemD.map(item =>
          typeof item === "object" ? Object.entries(item) : item
        );
        return i.flat().flat();
      });

      return itemsData;
    };
  }
  handleWatching = targetValue => {
    console.log(targetValue);
    this.setState({ watching: [...this.state.watching, targetValue] });
  };
  handleRemoveWatching = targetValue => {
    this.setState({
      watching: [...this.state.watching].filter(tgt => tgt !== targetValue)
    });
  };

  toggleWatchlist = () => {
    this.setState({ watchlistShowing: !this.state.watchlistShowing });
  };

  render() {
    console.log(this.state.watchlistShowing);
    return (
      <div className="console-wrapper">
        <div>
          <button onClick={this.toggleWatchlist}>Toggle</button>
        </div>
        <div>
          {!this.state.watchlistShowing ? (
            <SearchConsole
              handleWatching={this.handleWatching}
              searches={this.state.searches}
              items={this.state.items}
              itemsValues={this.state.itemsValues}
            />
          ) : (
            <SearchConsoleList
              watching={this.state.watching}
              handleRemoveWatching={this.handleRemoveWatching}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
