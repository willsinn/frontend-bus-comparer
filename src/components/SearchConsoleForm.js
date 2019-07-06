import React, { Component } from "react";
// import "../styles/SearchConsoleForm.scss";
class SearchConsoleForm extends Component {
  state = {
    date: "",
    start_from: "",
    to_destination: "",
    time: ""
  };
  handleChange = fieldType => {
    return event => {
      this.setState({ [fieldType]: event.target.value });
    };
  };
  generateOptions = options => {
    return options.map(option => (
      <option value={options[option]}>{option}</option>
    ));
  };

  render() {
    const sOptions = [];
    const sValues = [...this.props.searches].map(search => search.start_from);
    sValues.forEach(value => {
      if (!sOptions.includes(value)) {
        sOptions.push(value);
      }
    });

    const dOptions = [];
    const dValues = [...this.props.searches].map(
      search => search.to_destination
    );
    dValues.forEach(value => {
      if (!dOptions.includes(value)) {
        dOptions.push(value);
      }
    });

    const tOptions = [];
    const items = [...this.props.searches].map(search => search.times);
    debugger;
    items.forEach(item => {
      const time = item.map(attr => attr.time);
      if (!tOptions.includes(item)) {
        tOptions.concat(item);
      }
    });
    console.log(this.state);
    return (
      <div id="scf-form container">
        <div for="select-date search-option">
          <input
            onChange={e => {
              this.handleChange("date");
            }}
            type="date"
            name="date"
            value={this.state.date}
          />
        </div>
        <div className="select-start search-option">
          <select onChange={this.handleChange("start_from")} required>
            <option value="" hidden>
              Starting from:
            </option>
            {this.generateOptions(sOptions)}
          </select>
        </div>
        <div className="select-destination search-option">
          <select onChange={this.handleChange("to_destination")} required>
            <option value="" hidden>
              To Destination
            </option>
            {this.generateOptions(dOptions)}
          </select>
        </div>
        <div className="select-destination search-option">
          <select onChange={this.handleChange("time")} required>
            <option value="" hidden>
              Time
            </option>
            {this.generateOptions(tOptions)}
          </select>
        </div>
        <div className="submit-selections search-option">
          <input
            type="submit"
            value="submit"
            onClick={e => {
              this.props.handleSearchSubmit(this.state);
            }}
          />
        </div>
      </div>
    );
  }
}
export default SearchConsoleForm;
