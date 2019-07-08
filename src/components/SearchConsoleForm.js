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
    const dateOptions = [];
    const dateValues = [...this.props.searches].map(search => search.date);
    dateValues.forEach(value => {
      if (!dateOptions.includes(value)) {
        dateOptions.push(value);
      }
    });

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
    const tValues = [...this.props.items].map(item => item.time);
    tValues.forEach(value => {
      if (!tOptions.includes(value)) {
        tOptions.push(value);
      }
    });

    return (
      <div id="scf-form container">
        <div className="select-date search-option">
          <div className="select-date search-option">
            <select onChange={this.handleChange("date")} required>
              <option value="" hidden>
                Avaliable Dates:
              </option>
              {this.generateOptions(dateOptions)}
            </select>
          </div>
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
              this.props.handleSearchSubmit(e);
            }}
          />
        </div>
      </div>
    );
  }
}
export default SearchConsoleForm;
