import React, { Component } from "react";
import SearchConsole from "./SearchConsole";
import SearchConsoleList from "./SearchConsoleList";
import { connect } from "react-redux";
import SearchList from "./SearchList";
import withAuth from "../hocs/withAuth";

const uuidv4 = require("uuid/v4");

class Search extends Component {
  state = {
    items: [],
    itemsValues: [],
    watching: [],
    searches: [],
    results: [],
    message: "",
    addMsg: "",
  };
  componentDidMount() {
    fetch("https://backend-final-project.herokuapp.com/api/v1/searches", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((r) => r.json())
      .then((searches) => {
        this.setState({ searches: searches });
      });
    fetch("https://backend-final-project.herokuapp.com/api/v1/items", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((r) => r.json())
      .then((items) => {
        const itemsValues = flattenItemKeyValues(items);
        this.setState({ items: items, itemsValues: itemsValues });
      });
    const flattenItemKeyValues = (items) => {
      let itemsData = [...items].flat();
      itemsData = itemsData.map((itemD) => {
        let vals = Object.entries(itemD);
        return vals.flat();
      });
      itemsData = itemsData.map((itemD) => {
        let i = itemD.map((item) =>
          typeof item === "object" ? Object.entries(item) : item
        );
        return i.flat().flat();
      });

      return itemsData;
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.firstElementChild.value.toLowerCase();

    const vals = [...this.state.itemsValues].map((v) => v.join().toLowerCase());
    let schIdxs = [];
    vals.forEach((val, i) => {
      if (val.includes(query)) {
        schIdxs = schIdxs.concat(i);
      }
    });
    const itms = [...this.state.items];
    const idxMatch = schIdxs.map((schIdx) => itms[schIdx]);
    this.setState({ results: idxMatch }, () => {
      this.handleSearchMessage(query);
    });
  };
  handleSearchMessage = (query) => {
    let message;
    if (query === "") {
      message = "No value entered. Try again.";
    } else if (!this.state.results.length) {
      message = `No values matching your search...   ${query}`;
    } else {
      message = `${this.state.results.length} results for searching...   ${query}`;
    }

    this.setState({ message: message, addMsg: "" });
  };

  handleWatching = (targetValue) => {
    const alreadyWatching = [...this.state.watching].filter(
      (value) => value === targetValue
    );
    if (alreadyWatching[0]) {
      const addMsg = "Already watching this item, try another item!";
      this.setState({
        addMsg: addMsg,
        message: "",
      });
    } else {
      const addMsg = "Successfully added to your watchlist!";
      this.setState({
        watching: [...this.state.watching, targetValue],
        addMsg: addMsg,
        message: "",
      });
    }
  };

  handleRemoveWatching = (targetValue) => {
    this.setState({
      watching: [...this.state.watching].filter((tgt) => tgt !== targetValue),
    });
  };

  render() {
    const msg = this.state.message;
    const sVal = this.state.message.split("   ");
    return (
      <div className="console-wrapper">
        <SearchConsole
          items={this.state.items}
          handleSubmit={this.handleSubmit}
          watching={this.state.watching}
          handleRemoveWatching={this.handleRemoveWatching}
          results={this.state.results}
        />
        <div className="search-section">
          <div className="sch-msg-wrap">
            {msg !== "" && msg.charAt(0) === "1" ? (
              <div className="sch-msg-green">{msg}</div>
            ) : null}
            {msg !== "" && msg.charAt(0) !== "1" ? (
              <div className="sch-msg-red">{msg}</div>
            ) : null}
            {this.state.addMsg !== "" && msg.charAt(0) === "A" ? (
              <div className="sch-msg-red">{this.state.addMsg}</div>
            ) : null}
            {this.state.addMsg !== "" && msg.charAt(0) !== "A" ? (
              <div className="sch-msg-green">{this.state.addMsg}</div>
            ) : null}
          </div>
          <SearchConsoleList
            results={this.state.results}
            watching={this.state.watching}
            handleRemoveWatching={this.handleRemoveWatching}
            handleWatching={this.handleWatching}
            addMsg={this.state.addMsg}
          />
          {/* <SearchList
            addToWatchlist={this.addToWatchlist}
            searches={this.state.searches}
          /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  usersReducer: {
    user: { id, avatar, username, bio },
  },
}) => ({
  id,
  avatar,
  username,
  bio,
});

export default withAuth(connect(mapStateToProps)(Search));
