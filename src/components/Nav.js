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
        <div
          className="navbar"
          style={{
            backgroundColor: "#003e74",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../images/app-logo.png")}
            height="40px"
            width="40px"
            alt=""
            className="landing-bg"
            style={{
              position: "relative",
              height: "52px",
              weight: "40px",
              marginTop: "8px",
            }}
          />
          <h3 style={{ color: "white", marginLeft: "12px", paddingTop: "4px" }}>
            Bus Comparer
          </h3>
        </div>
      ) : (
        <div className="navbar">
          <div className="left-nav btn-wrap">
            <img
              src={require("../images/app-logo.png")}
              height="40px"
              width="40px"
              alt=""
              className="landing-bg"
              style={{
                position: "relative",
                height: "52px",
                weight: "40px",
                marginTop: "8px",
                marginRight: "12px",
              }}
            />
            <h3>Bus Comparer</h3>
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
