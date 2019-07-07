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
    // const hoverStyle = {
    //   !this.state.hover ?
    //   ()
    // }
    return (
      <div class="console-s-input">
        <div class="input-s container">
          <div className="input-s wrapper">
            <input
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              value={this.state.input}
              onChange={this.handleChange}
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ConsoleSearchInput;
