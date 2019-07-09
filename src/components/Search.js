import React, { Component } from "react";
import SearchConsole from "./SearchConsole";
import SearchConsoleList from "./SearchConsoleList";
import SearchList from "./SearchList";
const uuidv4 = require("uuid/v4");

class Search extends Component {
  state = {
    items: [],
    itemsValues: [],
    watching: [],
    searches: [],
    results: [],
    message: "",
    addMsg: ""
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
        this.setState({ searches: searches });
      });
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
  addToWatchlist = value => {
    const addMsg = "Successfully added to your watchlist!";

    const price = value.price;
    const time = value.time;
    let index = [];
    const vals = [...this.state.itemsValues].map(v => v.join().toLowerCase());
    let schIdxs = [];
    vals.forEach((val, i) => {
      if (val.includes(price) && val.includes(price)) {
        schIdxs = schIdxs.concat(i);
      }
    });
    const itms = [...this.state.items];
    const idxMatch = schIdxs.map(schIdx => itms[schIdx]);
    this.setState({ watching: idxMatch, addMsg: addMsg });
  };
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
    console.log(this.state.items);
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
    const addMsg = "Successfully added to your watchlist!";
    this.setState({
      watching: [...this.state.watching, targetValue],
      addMsg: addMsg
    });
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
        {this.state.addMsg}
        <SearchConsoleList
          watching={this.state.watching}
          results={this.state.results}
          handleRemoveWatching={this.handleRemoveWatching}
          handleWatching={this.handleWatching}
        />
        <SearchList
          addToWatchlist={this.addToWatchlist}
          searches={this.state.searches}
        />
      </div>
    );
  }
}

export default Search;
