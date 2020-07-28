import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { loginUser } from "../actions/user";
import { Link } from "react-router-dom";
import { Form, Segment, Message } from "semantic-ui-react";
// import { bindActionCreators } from 'redux'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };
  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = (e, semanticInputData) => {
    // this.setState({ [semanticInputData.name]: semanticInputData.value })
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = (e) => {
    //semantic forms preventDefault for you
    // e.preventDefault()
    this.props.loginUser(this.state.username, this.state.password); //comes from mapDispatchToProps
    this.setState({ username: "", password: "" }); //reset form to initial state
  };

  render() {
    console.log("%c LOGIN FORM PROPS: ", "color: red", this.props);
    return this.props.loggedIn ? (
      <Redirect to="/search" />
    ) : (
      <div className="login-page">
        <div className="form-wrapper">
          <div className="form-box">
            <Segment>
              <Form
                onSubmit={this.handleLoginSubmit}
                size="mini"
                key="mini"
                loading={this.props.authenticatingUser}
                error={this.props.failedLogin}
              >
                <Message
                  error
                  header={this.props.failedLogin ? this.props.error : null}
                />
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
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none" }}
                      className="login-btn"
                    >
                      Sign up
                    </Link>
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

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
//     failedLogin: reduxStoreState.usersReducer.failedLogin,
//     error: reduxStoreState.usersReducer.error,
//     loggedIn: reduxStoreState.usersReducer.loggedIn
//   }
// }

const mapStateToProps = ({
  usersReducer: { authenticatingUser, failedLogin, error, loggedIn },
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (username, password) => dispatch(loginUser(username, password))
//   }
// }

// const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
// const connectedToReduxLoginForm = connectedToReduxHOC(LoginForm)
// const connectedToReduxHOCWithRouterLoginForm = withRouter(connectedToReduxLoginForm)
//
// export default connectedToReduxHOCWithRouterLoginForm

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm));
