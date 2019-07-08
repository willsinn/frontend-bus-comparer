import React, { Component } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
import SearchConsoleForm from "./SearchConsoleForm";
import ConsoleSearchInput from "./ConsoleSearchInput";
const uuidv4 = require("uuid/v4");

class SearchConsole extends Component {
  state = {
    results: [],
    items: [],
    itemsValues: [],
    error: "",
    searchParams: {
      date: "",
      start: "",
      destination: "",
      time: ""
    }
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

  handleSearchSubmit = searchParams => {
    this.setState({ searchParams: searchParams });
    const route = this.filterRoute(searchParams);
    const date = this.filterDate(searchParams);
    const time = this.filterTime(searchParams);

    this.setState({ results: [...this.state.results.concat(time)] });
  };

  renderConsoleItems = searchParams => {
    return this.state.results.map(result => (
      <SearchConsoleItem key={uuidv4(result.id)} result={result} />
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
      const company = search.company;
      search.items.forEach(item => {
        if (item.time === params.time) {
          array.push({ item, company });
        }
      });
    });
    return array;
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
    this.setState({ results: idxMatch });
  };

  render() {
    const route =
      this.state.searchParams.start + "→" + this.state.searchParams.destination;
    return (
      <div id="search-console">
        <div className="render-search-console">
          <div className="left-s container">
            <ConsoleSearchInput
              key={uuidv4()}
              handleSubmit={this.handleSubmit}
            />
            <SearchConsoleForm
              key={uuidv4()}
              searches={this.props.searches}
              items={this.props.items}
              handleSearchSubmit={this.handleSearchSubmit}
            />
          </div>
          <div className="right-s container">
            <div className="content-wrapper wrapper">
              <div className="console-content-wrapper">
                <div className="console-item header">
                  <div className="cih-col header">Watchlist</div>
                  <div className="cih-col header">Day</div>
                  <div className="cih-col header">Time</div>
                  <div className="cih-col header">Price</div>
                  <div className="cih-col header">Remove</div>
                </div>
                {this.renderConsoleItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchConsole;
