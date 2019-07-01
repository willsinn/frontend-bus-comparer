import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  return (
    <Menu pointing secondary>
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" active={pathname === '/profile'} />
          <Menu.Menu position="right">
          <Menu.Item to="/logout" name="Logout" />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
      )}
    </Menu>
  )
}


const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
