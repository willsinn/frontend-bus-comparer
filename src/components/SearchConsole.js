import React, { Component } from "react";
import SearchConsoleItem from "./SearchConsoleItem";
import SearchConsoleForm from "./SearchConsoleForm";
import Watchlist from "./Watchlist";

class SearchConsole extends Component {
  state = {
    results: [],
    searchParams: {
      date: "2019-07-12",
      start: "NY, NY",
      destination: "Maryland",
      time: "03:00"
    },
    renderTarget: []
  };
  handleSearchSubmit = searchParams => {
    this.setState({ searchParams: searchParams });
    const route = this.filterRoute(searchParams);
    const date = this.filterDate(searchParams);
    const time = this.filterTime(searchParams);

    this.setState({ results: [...this.state.results.concat(time)] });
  };

  renderConsoleItems = () => {
    const date = this.state.searchParams.date.split("-");
    const day = date[2] % 7;
    return this.state.results.map(result => (
      <SearchConsoleItem
        key={result.id}
        date={date}
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
  handleRenderClick = renderTarget => {
    this.setState({
      renderTarget: renderTarget
    });
  };

  render() {
    const route =
      this.state.searchParams.start + "→" + this.state.searchParams.destination;
    const target = this.state.renderTarget;
    return (
      <div id="search-console">
        <SearchConsoleForm handleSearchSubmit={this.handleSearchSubmit} />

        <div className="render-search-console">
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

            <Watchlist />
          </div>
          <div className="target-item-container">
            <div className="target-item-wrapper">
              <div className="render-target-item">
                <div className="items-header">
                  <div>{this.state.searchParams.date}</div>
                  <div>{route}</div>
                </div>
                {Array.isArray(this.state.renderTarget) ? null : (
                  <div className="rti-item wrapper">
                    <div className="rti-item-col">{target.company}</div>
                    <div className="rti-item-col">{route}</div>
                    <div className="rti-item-col">{target.item.time}</div>
                    <div className="rti-item-col">{target.item.date}</div>
                    <div className="rti-item-col">{target.time}</div>
                    <div className="rti-item-col">
                      {target.item.pickup_from}
                    </div>
                    <div className="rti-item-col">
                      {target.item.purchase_url}
                    </div>

                    <div className="rti-item-col">{target.item.price}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchConsole;
