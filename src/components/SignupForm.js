import React, { Component } from "react";
import { connect } from "react-redux";
import { setUpUser } from "../actions/user";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    error: "",
  };
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value,
      });
    };
  };

  handleSubmit = () => {
    const defaultUrl = "https://svgur.com/i/65U.svg";
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: "Passwords dont match." });
    } else {
      this.props.setUpUser({
        username: this.state.username,
        password: this.state.password,
        avatar: defaultUrl,
      });
    }
  };
  render() {
    const signupFields = ["username", "password"];
    const caps = (field) => {
      return field.charAt(0).toUpperCase() + field.slice(1);
    };

    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <div className="signup-page">
        <div className="form-wrapper">
          <div className="form-box" style={{ height: "225px" }}>
            {this.state.error ? (
              <div
                className="sch-msg-red"
                style={{
                  width: "220px",
                  position: "absolute",
                  top: "40px",
                }}
              >
                {this.state.error}
              </div>
            ) : null}
            <Form
              onSubmit={this.handleSubmit}
              size="mini"
              key="mini"
              loading={this.props.authenticatingUser}
              error={this.props.failedLogin}
            >
              <div className="login-signup input-wrapper">
                {signupFields.map((field) => {
                  return (
                    <>
                      <label className="login-signup-label">{`${caps(
                        field
                      )}`}</label>
                      <input
                        type={field}
                        label={field}
                        placeholder={`Create ${caps(field)}`}
                        name={field}
                        onChange={this.handleChange(field)}
                        value={this.state[field]}
                        className="login-signup input"
                      />
                    </>
                  );
                })}
                <label className="login-signup-label">
                  Confirm your password
                </label>
                <input
                  type={"password"}
                  label={"confirmPassword"}
                  placeholder="Confirm Password"
                  name={"confirmPassword"}
                  onChange={this.handleChange("confirmPassword")}
                  value={this.state["confirmPassword"]}
                  className="login-signup input"
                />
                <hr />
                <div className="login-signup btn-wrapper">
                  <button className="login-btn " type="submit">
                    Sign up
                  </button>
                  <div
                    className="row"
                    style={{
                      marginTop: "8px",
                      justifyContent: "space-around",
                    }}
                  >
                    Already have an account?
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  usersReducer: { authenticatingUser, loggedIn },
}) => {
  return {
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUpUser: (username, password) => dispatch(setUpUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
