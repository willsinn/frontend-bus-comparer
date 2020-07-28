import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  const handleLogoutClick = (e) => {
    if (e) {
      localStorage.clear();
      document.location.reload();
      window.location.href = "/";
    }
  };
  return (
    <div className="navbar">
      <div className="left-nav btn-wrap">
        <h3>BUS COMPARER</h3>
      </div>
      <div className="right-nav btn-wrap">
        <Link className="nav-m-i btn" to="/profile">
          Profile
        </Link>
        <div
          className="nav-m-i btn"
          styles={{ borderStyle: "none" }}
          onClick={(e) => handleLogoutClick(e)}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ usersReducer: user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Nav));
