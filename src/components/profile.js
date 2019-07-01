import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

import Search from './Search'

class Profile extends Component {
  state = {
    searches:[],
    isProfile: true
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/searches', {
      method:'GET',
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
        }
      })
      .then(r => r.json())
      .then(searches => {
        this.setState({ searches })
    })
  }

  handleToggleClick = (e) => {
    this.setState({ isProfile: !this.state.isProfile })
  }

  handleLogoutClick = (e) => {
    localStorage.clear()
    document.location.reload()
  }
  render() {
    return (
      <>
        <button onClick={(e) => {this.handleLogoutClick(e)}}> Logout </button>
        {(this.state.isProfile) ?
        (
          <>
            <button onClick={(e) => {this.handleToggleClick(e)}}> To Console </button>
            <Card>
              <Image src={this.props.avatar} />
              <Card.Content>
                <Card.Header>{this.props.username}</Card.Header>
                <Card.Description>{this.props.bio}</Card.Description>
              </Card.Content>
            </Card>
          </>
        ) : (
          <>
            <button onClick={(e) => {this.handleToggleClick(e)}}> To Profile </button>
            <div id="search-console">
              <Search
                searches={this.state.searches}
              />
            </div>
          </>
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
