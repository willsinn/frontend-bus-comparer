import React, { Component } from 'react'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value
      })
    }
  }
  render(){
    const signupFields = [
      'username',
      'password',
      'confirmPassword'
    ];

    return(
      <div>
        {signupFields.map((field) => {
          return (
            <input
              onChange={this.handleChange(field)}
              value={this.state[field]}
            />
          )
        })}
      </div>
    )
  }
}

export default SignupForm
