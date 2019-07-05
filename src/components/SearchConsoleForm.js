import React, { Component } from "react";
class SearchConsoleForm extends Component {
  state = {
    date: "2019-07-12",
    start: "NY, NY",
    destination: "Maryland",
    time: "03:00"
  };
  handleChange = (e, fieldType) => {
    e.preventDefault(e);

    return event => {
      this.setState({ [fieldType]: event.target.value });
    };
  };

  render() {
    return (
      <div>
        <label for="dateofbirth">Travel Date</label>
        <input
          onChange={e => {
            this.handleChange("date");
          }}
          type="date"
          name="dateofsearch"
          className="dateofsearch"
        />
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
