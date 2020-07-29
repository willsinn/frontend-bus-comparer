import React, { Component } from "react";
import "../styles/consoleSearchInput.css";
import SearchConsoleList from "./SearchConsoleList";

const openWatch = { transform: "rotate(180deg)" };
class ConsoleSearchInput extends Component {
  state = {
    input: "",
    hover: false,
    open: false,
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    });
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  handleOpen = (e) => {
    if (e) {
      this.setState({ open: !this.state.open });
    }
  };
  render() {
    console.log(this.props.watching);
    return (
      <div className="input-s container">
        <form
          type="submit"
          style={{ margin: "0" }}
          onSubmit={(event) => this.props.handleSubmit(event)}
        >
          <input
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
            placeholder="search your bus"
          />
        </form>
        <div
          className="row"
          style={{
            width: "100px",
            justifyContent: "space-between",
            color: "white",
            height: "40px",
          }}
        >
          <div>Watchlist</div>
          <div
            className="rot-btn row"
            style={this.state.open ? openWatch : null}
            onClick={(e) => this.handleOpen(e)}
          >
            ⌃
          </div>
        </div>
        {this.state.open ? (
          <div className="watching-window">
            {this.props.watching.length === 0 ? (
              <span className="empty-arr-msg">
                You aren't currently watching anything. Search then select a
                ticket to watch down below.
              </span>
            ) : (
              <SearchConsoleList
                results={this.props.results}
                items={this.props.items}
                watching={this.props.watching}
                handleRemoveWatching={this.props.handleRemoveWatching}
                open={this.state.open}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ConsoleSearchInput;
