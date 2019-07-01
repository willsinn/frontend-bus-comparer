import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

import Search from './Search'

class Profile extends Component {
  state = {
    isProfile: true
  }
  handleClick = (e) => {
    this.setState({ isProfile: !this.state.isProfile })
  }
  render() {
    console.log(this.state);
    return (
      <>
      <button onClick={(e) => {this.handleClick(e)}}> TOGGLE </button>

        {(this.state.isProfile) ?
        (
          <Card>
            <Image src={this.props.avatar} />
            <Card.Content>
              <Card.Header>{this.props.username}</Card.Header>
              <Card.Description>{this.props.bio}</Card.Description>
            </Card.Content>
          </Card>
        ) : (
          <Search />          
        )}

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
