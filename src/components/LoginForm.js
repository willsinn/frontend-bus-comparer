import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { loginUser } from "../actions/user";
import { Link } from "react-router-dom";
import { Form, Segment } from "semantic-ui-react";
// import { bindActionCreators } from 'redux'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = (e) => {
    if (e) {
      this.props.loginUser(this.state.username, this.state.password);
      this.setState({ username: "", password: "" });
    }
  };

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/search" />
    ) : (
      <div className="login-page">
        <img
          src={require("../images/bus-stop.png")}
          height="200px"
          width="200px"
          alt=""
          className="landing-bg"
        />
        <div className="form-wrapper">
          <div className="form-box">
            {this.props.failedLogin ? (
              <div
                className="sch-msg-red"
                style={{
                  width: "220px",
                  position: "absolute",
                  top: "40px",
                }}
              >
                {this.props.error}
              </div>
            ) : null}
            <Segment>
              <Form
                onSubmit={(e) => this.handleLoginSubmit(e)}
                size="mini"
                key="mini"
                loading={this.props.authenticatingUser}
                error={this.props.failedLogin}
              >
                <div className="login-signup input-wrapper">
                  <label className="login-signup-label">Username</label>
                  <input
                    label="username"
                    placeholder="Enter your username."
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="login-signup input"
                  />
                  <label className="login-signup-label">Password</label>
                  <input
                    type="password"
                    label="password"
                    placeholder="Enter your password."
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="login-signup input"
                  />
                  <hr />
                  <div className="login-signup btn-wrapper">
                    <button className="login-btn" type="submit">
                      Log in
                    </button>
                    <div
                      className="row"
                      style={{
                        marginTop: "8px",
                        justifyContent: "space-around",
                      }}
                    >
                      Don't have an account?
                      <Link to="/signup" style={{ textDecoration: "none" }}>
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </Segment>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  usersReducer: { authenticatingUser, failedLogin, error, loggedIn },
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn,
});

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm));
