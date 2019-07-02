import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUpUser } from '../actions/user'
import { withRouter, Redirect } from 'react-router'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error:''
  }
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value
      })
    }
  }

  handleSubmit = () => {
    if(this.state.password !== this.state.confirmPassword) {
      this.setState({error: 'Passwords dont match'})
    } else {
      this.props.setUpUser(
        this.state.username,
        this.state.password
      );
    }
  }
  render(){
    const signupFields = [
      'username',
      'password',
      'confirmPassword'
    ];

    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <div>
      <p style={{color:'red'}}>{this.state.error}</p>

        {signupFields.map((field) => {
          return (
            <input
              onChange={this.handleChange(field)}
              value={this.state[field]}
            />
          )
        })}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ usersReducer: { loggedIn } }) => {
  return {
    loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUpUser: (username, password) => dispatch(setUpUser(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
