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
      </div>
    );
  }
}

export default ConsoleSearchInput;
