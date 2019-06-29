import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

import Search from './Search'


class Profile extends Component {
  render() {
    console.log(this.props);
    return (
        <Card>
          <Image src={this.props.avatar} />
          <Card.Content>
            <Card.Header>{this.props.username}</Card.Header>

            <Card.Description>{this.props.bio}</Card.Description>
          </Card.Content>
          <Search />
        </Card>
    )
  }
}
// const Profile = ({ avatar, username, bio }) => (
//   <Card>
//     <Image src={avatar} />
//     <Card.Content>
//       <Card.Header>{username}</Card.Header>
//
//       <Card.Description>{bio}</Card.Description>
//     </Card.Content>
//   </Card>
// )

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     avatar: reduxStoreState.usersReducer.user.avatar,
//     username: reduxStoreState.usersReducer.user.username,
//     bio: reduxStoreState.usersReducer.user.bio
//   }
// }

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
