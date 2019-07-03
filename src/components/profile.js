import React, { Component } from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'


class Profile extends Component {
  state = {
    currentUser: {},
    isProfile: true,
    activeError: [],


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
        [toggleType]: !this.state[toggleType],
        activeError:[]
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
    const messages = [
      ['avatar', 'save failed, no URL provided.'],
      ['username', 'save failed, include new username.'],
      ['bio', 'save failed, include new bio.']
    ]
    switch(updateType) {
      case "avatar":
        return (event) => {
          if (this.state.avatar === '') {
            this.setState({
              activeError: [...messages[0]],
              editAvatar: false
            })
          } else {
            this.handleFetch({ avatar: this.state.avatar })
          }
        }
      case "username":
        return (event) => {
          if (this.state.username === '') {
            this.setState({
              activeError: [...messages[1]],
              editUsername: false
            })
          } else {
            this.handleFetch({ username: this.state.username })
          }
        }
      case "bio":
        return (event) => {
          if (this.state.bio === '') {
            this.setState({
              activeError: [...messages[2]],
              editBio: false
            })
          } else {
            this.handleFetch({ bio: this.state.bio })
          }
        }
      default:
        return;
    }
  }
  handleFetch = (body) => {
    const type = Object.keys(body)
    const editType = "edit" + `${type[0].charAt(0).toUpperCase() + type[0].slice(1)}`
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
          [editType]: false
      })
    })
  }
  render() {
    console.log(this.state.activeError);
    console.log(this.state.avatar);
    let user;
    (this.state.currentUser.id)
    ? (user = this.state.currentUser)
    : (user = this.props)
    return (
      <div className="profile-page">
        <div className="profile-wrapper">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img className="profile-avatar" src={user.avatar} alt="" />
            </div>
          </div>
          <div className="avatar-btn-wrapper">
            {(!this.state.editAvatar)?
              ( <div>
                  <div>
                    <button className='edit-btn' onClick={this.toggleEdit('editAvatar')}> Change Avatar </button>
                    {(this.state.activeError[0] === "avatar") ?
                      (<div>{this.state.activeError[1]}</div>) :
                      (null)}
                  </div>

                  <div>
                  </div>
                </div>

              ) : (
                <div className='editing-wrapper'>
                  <div className='editing-header'>
                    🔗 <input type="text" placeholder="Input image URL only." onChange={this.handleChange('avatar')} />
                  </div>
                  <div className='editing input-form'>
                    <button onClick={this.handleUpdate('avatar')}> Update </button>
                  </div>
                </div>
              )}
          </div>
          <div className="edit-fields-wrapper">
            <div className="profile-fields">
              <div className="edit-text-fields-wrapper">
              <div className="profile-title">
                <h3 style={{margin:'0'}}>Username</h3>

              </div>
              <div className="edit-user-text">
                {(!this.state.editUsername) ?
                  (
                    <div className="toggle-wrapper">
                      <div>
                        {user.username}
                      </div>
                      <div className="input-error">
                      {(this.state.activeError[0] === "username") ?
                        (<div>{this.state.activeError[1]}</div>) :
                        (null)}
                      </div>
                      <div>
                        <button className='edit-btn' onClick={this.toggleEdit('editUsername')}> ✏️ </button>
                      </div>
                    </div>
                  ) : (
                    <div className='editing-wrapper'>
                      <div className='editing-header'>
                        📝 <input type="text" placeholder="Enter new username." onChange={this.handleChange('username')} />
                      </div>
                      <div className='editing input-form'>
                        <button onClick={this.handleUpdate('username')}> Update </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="profile-title">
                  <h3 style={{margin:'0'}}> Name, Location</h3>
                </div>
                <div className='edit-bio-wrapper'>
                {(!this.state.editBio) ?
                  (
                    <div className="toggle-wrapper">
                      <div>
                        {(user.bio === '') ?
                          (
                            <div className='add-bio-text'>
                              <span className='add-bio-text'> Please add name & where you're located </span>
                            </div>
                          ) : (
                            <div>
                              <div>
                              {user.bio}
                              </div>
                              <div className="input-error">
                              {(this.state.activeError[0] === "avatar")  ?
                                (<div>{this.state.activeError[1]}</div>) :
                                ('')}
                              </div>
                            </div>

                          )}
                      </div>
                      {(this.state.activeError[0] === "bio") ?
                        (<div>{this.state.activeError[1]}</div>) :
                        (null)}
                      <div>
                        <button className='edit-btn' onClick={this.toggleEdit('editBio')}> ✏️ </button>

                      </div>
                    </div>
                  ) : (
                    <div className='editing-wrapper'>
                      <div className='editing-header'>
📝  <input type="text" placeholder="Input name and residence location." onChange={this.handleChange('bio')} />
                      </div>
                      <div className='editing input-form'>
                        <button onClick={this.handleUpdate('bio')}> Update </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
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
