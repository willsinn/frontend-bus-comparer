import React, { Component } from "react";
import "../styles/consoleSearchInput.css";

class ConsoleSearchInput extends Component {
  state = {
    input: "",
    hover: false
  };
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    return (
      <div className="console-s-input">
        <div className="input-s container">
          <div className="input-s wrapper">
            <input
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              value={this.state.input}
              onChange={this.handleChange}
              type="text"
            />
            <input
              onClick={e => {
                this.props.handleSubmit(this.state.input);
              }}
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ConsoleSearchInput;
