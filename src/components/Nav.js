import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ user, location: { pathname } }) => {
  const handleLogoutClick = (e) => {
    if (e) {
      localStorage.clear();
      document.location.reload();
      window.location.href = "/";
    }
  };
  console.log(user);
  return (
    <>
      {user === null ? (
        <div className="navbar" style={{ backgroundColor: "#003e74" }}>
          <h3 style={{ color: "white", marginRight: "7.5%" }}>BUS COMPARER</h3>
        </div>
      ) : (
        <div className="navbar">
          <div className="left-nav btn-wrap">
            <h3>BUS COMPARER</h3>
          </div>
          <div className="right-nav btn-wrap">
            <Link
              className="nav-m-i"
              to="/search"
              style={{ textDecoration: "none" }}
            >
              Search
            </Link>
            <Link
              className="nav-m-i"
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              Profile
            </Link>
            <div
              className="nav-m-i"
              styles={{ borderStyle: "none" }}
              onClick={(e) => handleLogoutClick(e)}
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.usersReducer.user };
};

export default withRouter(connect(mapStateToProps)(Nav));
