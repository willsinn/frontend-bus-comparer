import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  return (
    <div className="navigation">
      <Menu pointing secondary>
        {loggedIn ? (
          <>
          <Menu.Item as={NavLink} to="/profile" active={pathname === '/profile'} />
          </>
        ) : (
          <Menu.Item as={NavLink} to="/login" active={pathname === '/login'} />
        )}
      </Menu>
    </div>
  )
}


const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
