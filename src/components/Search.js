import React, { Component } from "react";
import SearchConsole from "./SearchConsole";
import SearchConsoleList from "./SearchConsoleList";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import ConsoleSearchInput from "./ConsoleSearchInput";
import { fetchUrl } from "../urls.js";

const uuidv4 = require("uuid/v4");

class Search extends Component {
  state = {
    items: [],
    itemsValues: [],
    watching: [],
    searches: [],
    results: [],
    message: "... searching for results  with $11.",
    addMsg: "",
    messageTarget: "",
    isActive: "masterlist",
  };
  componentDidMount() {
    fetch(`${fetchUrl}/api/v1/searches`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((r) => r.json())
      .then((searches) => {
        this.setState({ searches: searches });
      });
    fetch(`${fetchUrl}/api/v1/items`, {
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

  handleWatching = (targetValue, watchLocation) => {
    const alreadyWatching = [...this.state.watching].filter(
      (value) => value === targetValue
    );
    if (alreadyWatching[0]) {
      const addMsg = "Already watching this item, try another item!";
      this.setState({
        addMsg: addMsg,
        message: "",
        messageTarget: `${watchLocation}`,
      });
    } else {
      const addMsg = "Successfully added to your watchlist!";
      this.setState({
        watching: [...this.state.watching, targetValue],
        addMsg: addMsg,
        message: "",
        messageTarget: `${watchLocation}`,
      });
    }
  };

  handleRemoveWatching = (targetValue) => {
    this.setState({
      watching: [...this.state.watching].filter((tgt) => tgt !== targetValue),
    });
  };

  render() {
    console.log(this.state.isActive);
    const msg = this.state.message;
    const sVal = this.state.message.split("   ");

    return (
      <div className="console-wrapper">
        <div className="render-search-console">
          <ConsoleSearchInput />
        </div>

        <div className="search-section">
          <div
            className="body-container"
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span className="sch-msg-wrap">
              <div className="sch-msg-green">{msg}</div>
            </span>
            <SearchConsoleList
              items={this.state.items}
              watching={this.state.watching}
              handleRemoveWatching={this.handleRemoveWatching}
              handleWatching={this.handleWatching}
              addMsg={this.state.addMsg}
            />
          </div>
          <div
            className="body-container"
            style={{
              backgroundColor: "rgb(0, 62, 116, 0.8)",
              width: "525px",
            }}
          >
            <div
              className="list-tab-active"
              style={
                this.state.isActive === "masterlist"
                  ? {
                      backgroundColor: "rgb(0, 62, 116, 0.8)",
                      borderBottom: "0",
                    }
                  : null
              }
            >
              <span
                className="list-tab-txt"
                onClick={() => this.setState({ isActive: "masterlist" })}
              >
                MASTERLIST
              </span>
            </div>
            <div
              className="list-tab"
              style={
                this.state.isActive === "watchlist"
                  ? {
                      backgroundColor: "rgb(0, 62, 116, 0.8)",
                      borderBottom: "0",
                    }
                  : null
              }
            >
              <span
                className="list-tab-txt"
                onClick={() => this.setState({ isActive: "watchlist" })}
              >
                WATCHLIST
              </span>
            </div>
            {this.state.messageTarget === "masterlist" ? (
              <span className="sch-msg-wrap">
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
              </span>
            ) : null}
            {this.state.isActive === "watchlist" ? (
              <span>
                {this.state.watching.length === 0 ? (
                  <span className="empty-arr-msg">
                    You aren't currently watching anything. Search then select a
                    ticket to watch down below.
                  </span>
                ) : (
                  <SearchConsoleList
                    watching={this.state.watching}
                    handleRemoveWatching={this.handleRemoveWatching}
                    handleWatching={this.handleWatching}
                    addMsg={this.state.addMsg}
                  />
                )}
              </span>
            ) : (
              <SearchConsoleList
                watching={this.state.watching}
                handleRemoveWatching={this.handleRemoveWatching}
                handleWatching={this.handleWatching}
                addMsg={this.state.addMsg}
                items={this.state.items}
              />
            )}
          </div>
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
