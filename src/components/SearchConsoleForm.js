import React, { Component } from "react";
// import "../styles/SearchConsoleForm.scss";
class SearchConsoleForm extends Component {
  state = {
    date: "",
    start_from: "NY",
    to_destination: "MD",
    time: "03:00"
  };
  handleChange = fieldType => {
    return event => {
      this.setState({ [fieldType]: event.target.value });
    };
  };
  generateOptions = options => {
    return options.map(option => (
      <option value={option} onChange={this.handleChange}>
        {option}
      </option>
    ));
  };
  // generateSelectOptions = param => {
  //   const values = [...this.props.searches].map(search => [
  //     search[param],
  //     search.id
  //   ]);
  //   const options = [];
  //   values.forEach(value => {
  //     if (!options.includes(value)) {
  //       options.push(value);
  //     }
  //   });
  //   return options.map(option => <option>{option.param}</option>);
  // };
  render() {
    let sOptions = [];
    const sValues = [...this.props.searches].map(search => search.start_from);
    sValues.forEach(value => {
      if (!sOptions.includes(value)) {
        sOptions.push(value);
      }
    });

    let dOptions = [];

    const dValues = [...this.props.searches].map(
      search => search.to_destination
    );
    dValues.forEach(value => {
      if (!dOptions.includes(value)) {
        dOptions.push(value);
      }
    });
    console.log(dOptions);
    return (
      <div id="scf-form container">
        <label for="dateofbirth">Travel Date</label>
        <input
          onChange={e => {
            this.handleChange("date");
          }}
          type="date"
          name="dateofsearch"
          className="dateofsearch"
          value={this.state.date}
        />
        <div className="destinationofsearch">
          <select required>
            <option value="" hidden>
              Example Placeholder
            </option>
            {this.generateOptions(sOptions)}
          </select>
        </div>
        <input
          type="submit"
          value="submit"
          onClick={e => {
            this.props.handleSearchSubmit(this.state);
          }}
        />
      </div>
    );
  }
}
export default SearchConsoleForm;
