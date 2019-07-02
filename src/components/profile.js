import React, { Component } from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'


class Profile extends Component {
  state = {
    isProfile: true,
    toggleEditing: false,
    avatarUrl: ''
  }
  handleClick = () => {
    this.setState({ toggleEditing: !this.state.toggleEditing })
  }
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value
      })
    }
  }
  handleUpdate = () => {
    fetch('http://localhost:3000/api/v1/users/1',
    { method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }, body: JSON.stringify({
        avatar: this.state.avatarUrl
      })
    })
    .then(r => r.json())
    .then(object => {
      console.log(object);
    })
  }



  render() {
    console.log(this.props);

    return (
      <>
      <div className="profile-page">
        <div className="profile-wrapper">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img className="profile-avatar" src={this.props.avatar} />
            </div>
          </div>
          <div className="avatar-btn-wrapper">
            {(!this.state.toggleEditing)?
              (
                <button onClick={this.handleClick}> Change Avatar </button>
              ) : (
                <div className='editing-wrapper'>
                  <div className='editing-header'>
                    New Avatar: <input type="text" onChange={this.handleChange('avatarUrl')} />
                  </div>
                  <div className='editing input-form'>
                    <button onClick={this.handleUpdate}> Update </button>
                  </div>
                </div>
              )}
          </div>
          <div className="edit-fields-wrapper">
            <div className="profile-fields">
              <div>Username: {this.props.username}</div>
              <div>
                <button> Edit Username </button>
              </div>
            </div>
            <div className="profile-fields">
              <div>Full-Name: Full Name</div>
              <div>
                <button> Edit name </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}


const mapStateToProps = ({ usersReducer: { user: { avatar, username, bio } } }) => ({
  avatar,
  username,
  bio
})

// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

export default withAuth(connect(mapStateToProps)(Profile))
