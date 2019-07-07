import React, { Component } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
import SearchConsoleForm from "./SearchConsoleForm";
import ConsoleSearchInput from "./ConsoleSearchInput";

class SearchConsole extends Component {
  state = {
    results: [],
    searchParams: {
      date: "",
      start: "",
      destination: "",
      time: ""
    },
    error: ""
  };
  handleSearchSubmit = searchParams => {
    this.setState({ searchParams: searchParams });
    const route = this.filterRoute(searchParams);
    const date = this.filterDate(searchParams);
    const time = this.filterTime(searchParams);

    this.setState({ results: [...this.state.results.concat(time)] });
  };

  renderConsoleItems = searchParams => {
    const date = this.state.searchParams.date.split("-");
    const day = date[2] % 7;
    return this.state.results.map(result => (
      <SearchConsoleItem
        key={result.id}
        date={this.state.searchParams.date}
        day={day}
        result={result}
        handleDeleteItem={this.handleDeleteItem}
        handleRenderClick={this.handleRenderClick}
      />
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
  handleDeleteItem = target => {
    this.setState({
      results: [...this.state.results.filter(result => result !== target)]
    });
  };
  handleSubmit = userInput => {
    const results = this.searchItemsAlg(userInput);
    const error = `Nothing matches the search ${userInput}`;
    results !== undefined
      ? this.setState({ results: results })
      : this.setState({ error: error });


  };
  searchItemsAlg = userInput => {

    const matches = [...this.props.itemsValues].map(itemD => {
      let match = false;
      itemD.forEach(value => {
        if (value.includes(userInput)) {
          matches.push(this.props.items[dataIndex])

        }
        return value.includes(userInput) ? (match = true)
      });
      return match ?  : null;
    });

    //1.map through each arrayItem
    //2. iterate to check each values from AI using includes
    //3 return either the an array with [] that are false and value that is true or use REDUCE
    return matches;
  };

  render() {
    console.log(this.props.dataValues);
    const route =
      this.state.searchParams.start + "→" + this.state.searchParams.destination;
    return (
      <div id="search-console">
        <div className="render-search-console">
          <div className="left-s container">
            <ConsoleSearchInput handleSubmit={this.handleSubmit} />
            <SearchConsoleForm
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
// <div className="items-header">
//   <div>{this.state.searchParams.date}</div>
//   <div>{route}</div>
// </div>
