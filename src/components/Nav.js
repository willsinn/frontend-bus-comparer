import React, { useState } from "react";
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
  const [burger, setBurger] = useState(false);
  return (
    <div className="navbar">
      <div className="left-nav btn-wrap">
        <div>LOGO</div>
        <button className="nav-m-i btn">Watchlist</button>
      </div>
      <div className="right-nav btn-wrap">
        <Link className="nav-m-i btn" to="/profile">
          Profile
        </Link>
        <button
          className="nav-m-i btn"
          styles={{ borderStyle: "none" }}
          onClick={(e) => handleLogoutClick(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ usersReducer: user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Nav));
