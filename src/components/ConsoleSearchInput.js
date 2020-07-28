import React, { Component } from "react";
import "../styles/consoleSearchInput.css";

class ConsoleSearchInput extends Component {
  state = {
    input: "",
    hover: false,
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
  render() {
    return (
      <div className="input-s container">
        <form
          type="submit"
          style={{ margin: "0" }}
          onSubmit={(event) => {
            this.props.handleSubmit(event);
          }}
        >
          <input
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
            placeholder="Search Bus Stuff"
          />
        </form>
        <div
          className="row"
          style={{
            width: "150px",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div>Watchlist</div> <div className="rot-btn row">⌃</div>
        </div>
      </div>
    );
  }
}

export default ConsoleSearchInput;
