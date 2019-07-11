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
        console.log("SEARCHES", searches);
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
        console.log("ITEMS", items);
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
  addToWatchlist = (props, item) => {
    const search = props.search;
    const addItem = { ...item, search };
    {
      this.handleWatching(addItem);
    }
  };

  handleWatching = targetValue => {
    const addMsg = "Successfully added to your watchlist!";
    console.log("watching", targetValue);
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
          results={this.state.results}
          watching={this.state.watching}
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
const mapStateToProps = ({
  usersReducer: {
    user: { id, avatar, username, bio }
  }
}) => ({
  id,
  avatar,
  username,
  bio
});

export default withAuth(connect(mapStateToProps)(Search));
