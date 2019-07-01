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

  handleClick = (e) => {
    this.setState({ isProfile: !this.state.isProfile })
  }

  render() {
    return (
      <>
        {(this.state.isProfile) ?
        (
          <>
            <button onClick={(e) => {this.handleClick(e)}}> To Console </button>
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
            <button onClick={(e) => {this.handleClick(e)}}> To Profile </button>
            <Search
              searches={this.state.searches}
            />
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
