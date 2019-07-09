import React, { Component } from "react";
import SearchConsole from "./SearchConsole";
import SearchConsoleList from "./SearchConsoleList";
const uuidv4 = require("uuid/v4");

class Search extends Component {
  state = {
    items: [],
    itemsValues: [],
    watching: [],
    results: [],
    message: ""
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
  handleSubmit = event => {
    event.preventDefault();
    const query = event.target.firstElementChild.value.toLowerCase();

    const vals = [...this.state.itemsValues].map(v => v.join().toLowerCase());
    let schIdxs = [];
    vals.forEach((val, i) => {
      if (val.includes(query)) {
        schIdxs = schIdxs.concat(i);
      }
    });
    const itms = [...this.state.items];
    const idxMatch = schIdxs.map(schIdx => itms[schIdx]);
    this.setState({ results: idxMatch }, () => {
      this.handleSearchMessage(query);
    });
  };
  handleSearchMessage = query => {
    let message;
    // console.log(this.state.results);
    if (query === "") {
      message = "No value entered. Try again.";
    } else if (!this.state.results.length) {
      message = `No values matching your search...   ${query}`;
    } else {
      message = `${
        this.state.results.length
      } results for searching...   ${query}`;
    }

    this.setState({ message: message });
  };
  handleWatching = targetValue => {
    console.log(targetValue);
    this.setState({ watching: [...this.state.watching, targetValue] });
  };
  handleRemoveWatching = targetValue => {
    this.setState({
      watching: [...this.state.watching].filter(tgt => tgt !== targetValue)
    });
  };

  render() {
    const msg = this.state.message;
    const sVal = this.state.message.split("   ");
    return (
      <div className="console-wrapper">
        <div className="sch-cs wrap">
          <SearchConsole
            items={this.state.items}
            itemsValues={this.state.itemsValues}
            handleSubmit={this.handleSubmit}
          />
          <div className="sch-msg wrap">
            {msg !== "" ? (
              <div className="sch-msg static">{msg}</div>
            ) : (
              <>
                <div className="sch-msg static">{sVal[0]}</div>
                <div className="sch-msg active">{sVal[1]}</div>
              </>
            )}
          </div>
        </div>
        <SearchConsoleList
          watching={this.state.watching}
          results={this.state.results}
          handleRemoveWatching={this.handleRemoveWatching}
          handleWatching={this.handleWatching}
        />
      </div>
    );
  }
}

export default Search;
