import React, { Component } from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'


class Profile extends Component {
  state = {
    isProfile: true
  }

  render() {
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
            <button> Change Avatar </button>
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
