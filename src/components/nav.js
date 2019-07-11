import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  const handleLogoutClick = e => {
    localStorage.clear();
    document.location.reload();
    window.location.href = "/";
  };
  const [burger, setBurger] = useState(false);
  return (
    <>
      {loggedIn ? (
        <div className="navigation">
          {!burger ? (
            <div className="burger-nav" onClick={() => setBurger(!burger)}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          ) : (
            <div className="burger-nav" onClick={() => setBurger(!burger)}>
              <div className="bar1 change" />
              <div className="bar2 change" />
              <div className="bar3 change" />
            </div>
          )}
          {burger ? (
            <div className="burger-menu">
              <div className="nav-menu-item">
                <button className="nav-m-i btn">
                  <Link to="/profile">Profile</Link>
                </button>
              </div>
              <div className="nav-menu-item">
                <button
                  onClick={() => setBurger(!burger)}
                  className="nav-m-i btn"
                >
                  <Link to="/search">Search</Link>
                </button>
              </div>

              <div className="nav-menu-item">
                <button
                  className="nav-m-i btn"
                  onClick={e => {
                    handleLogoutClick(e);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
          <div className="nav-profile-avatar" />
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ usersReducer: user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Nav));
