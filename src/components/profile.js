import React, { Component } from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'


class Profile extends Component {
  state = {
    currentUser: {},
    isProfile: true,

    editAvatar: false,
    avatar: '',

    editUsername: false,
    username: '',

    editBio: false,
    bio: ''
  }
  toggleEdit = (toggleType) => {
    return (event) => {
      this.setState({
        [toggleType]: true
      })
    }
  }
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value
      })
    }
  }
  handleUpdate = (updateType) => {
    switch(updateType) {
      case "avatar":
        return (event) => {
            this.handleFetch( this.state.editAvatar, { avatar: this.state.avatar })
          }
        break;
      case "username":
        return (event) => {
            this.handleFetch( this.state.editUsername, {
              username: this.state.username })
          }
        break;
      case "bio":
        return (event) => {
            this.handleFetch( this.state.editBio, {
              bio: this.state.bio })
          }
      default:
        break;
    }
  }
  handleFetch = (toggle, body) => {
    const type = Object.keys(body)
    fetch('http://localhost:3000/api/v1/users/1',
    { method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }, body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(updatedUser => {
      this.setState({
          currentUser: updatedUser,
          [type]: '',
          toggle: false
      })
    })
  }
  render() {
    console.log(this.state.editUsername);
    console.log(this.state.editBio);

    let renderAvatar;
    (this.state.currentUser.id)
    ? (renderAvatar = this.state.currentUser.avatar)
    : (renderAvatar = this.props.avatar)
    return (
      <>
      <div className="profile-page">
        <div className="profile-wrapper">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img className="profile-avatar" src={renderAvatar} alt="" />
            </div>
          </div>
          <div className="avatar-btn-wrapper">
            {(!this.state.editAvatar)?
              (
                <button onClick={this.toggleEdit('editAvatar')}> Change Avatar </button>
              ) : (
                <div className='editing-wrapper'>
                  <div className='editing-header'>
                    New Avatar: <input type="text" onChange={this.handleChange('avatar')} />
                  </div>
                  <div className='editing input-form'>
                    <button onClick={this.handleUpdate('avatar')}> Update </button>
                  </div>
                </div>
              )}
          </div>
          <div className="edit-fields-wrapper">
            <div className="profile-fields">
              <div>Username: {this.state.currentUser.username}</div>
              <div>
                <button onClick={this.toggleEdit('editUsername')}> Edit Username </button>
              </div>
            </div>
            <div className="profile-fields">
              <div>Full-Name: Full Name</div>
              <div>
                <button onClick={this.toggleEdit('editBio')}> Edit name </button>
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
