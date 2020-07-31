import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    currentUser: {},
    isProfile: true,
    activeError: [],

    editAvatar: false,
    avatar: "",

    editUsername: false,
    username: "",

    editBio: false,
    bio: "",

    renderWatching: [],
  };
  toggleEdit = (toggleType) => {
    return (event) => {
      this.setState({
        [toggleType]: !this.state[toggleType],
        activeError: [],
      });
    };
  };
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value,
      });
    };
  };
  handleUpdate = (updateType) => {
    const messages = [
      ["avatar", "save failed, no URL provided."],
      ["username", "save failed, include new username."],
      ["bio", "save failed, include new bio."],
    ];
    switch (updateType) {
      case "avatar":
        return (event) => {
          if (this.state.avatar === "") {
            this.setState({
              activeError: [...messages[0]],
              editAvatar: false,
            });
          } else {
            this.handleFetch({ avatar: this.state.avatar });
          }
        };
      case "username":
        return (event) => {
          if (this.state.username === "") {
            this.setState({
              activeError: [...messages[1]],
              editUsername: false,
            });
          } else {
            this.handleFetch({ username: this.state.username });
          }
        };
      case "bio":
        return (event) => {
          if (this.state.bio === "") {
            this.setState({
              activeError: [...messages[2]],
              editBio: false,
            });
          } else {
            this.handleFetch({ bio: this.state.bio });
          }
        };
      default:
        return;
    }
  };
  handleFetch = (body) => {
    const type = Object.keys(body);
    const editType = `edit${
      type[0].charAt(0).toUpperCase() + type[0].slice(1)
    }`;
    fetch(
      `https://backend-final-project.herokuapp.com/api/v1/users/${this.props.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify(body),
      }
    )
      .then((r) => r.json())
      .then((updatedUser) => {
        console.log(updatedUser);
        this.setState({
          currentUser: updatedUser,
          [type]: "",
          [editType]: false,
        });
      });
  };

  render() {
    console.log(this.props.user);
    let user;
    this.state.currentUser.id
      ? (user = this.state.currentUser)
      : (user = this.props);

    return (
      <div className="profile-page">
        <div className="body-container" style={{ width: "60%" }}>
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img className="profile-avatar" src={user.avatar} alt="" />
            </div>

            <div className="avatar-btn-wrapper">
              {!this.state.editAvatar ? (
                <>
                  <div className="avatar-btn">
                    <button
                      className="edit-btn"
                      onClick={this.toggleEdit("editAvatar")}
                    >
                      <span>Update</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="editing-container">
                  <div className="editing-header">
                    <input
                      className="edit-input-field"
                      style={{ margin: "0" }}
                      type="text"
                      placeholder="Add new image address."
                      onChange={this.handleChange("avatar")}
                    />
                  </div>
                  <div className="btn-container">
                    <button
                      className="edit-btn login-btn"
                      onClick={this.handleUpdate("avatar")}
                    >
                      <span>Save</span>
                    </button>
                    <button
                      className="edit-btn login-btn"
                      onClick={this.toggleEdit("editAvatar")}
                    >
                      <span>Exit</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="btm-profile">
            {this.state.activeError.length ? (
              <div className="error-container">
                <div className="error-render">{this.state.activeError}</div>
              </div>
            ) : null}
            <div className="edit-container">
              <div className="edit-fields-wrapper">
                <div className="profile-fields">
                  <div className="edit-text-fields-wrapper">
                    <div className="profile-title">
                      <div className="profile-content-header">Username</div>
                    </div>
                    {!this.state.editUsername ? (
                      <div className="toggle-wrapper">
                        <div className="top-box">
                          <div className="error-wrapper">
                            <div className="user-content">{user.username}</div>
                          </div>
                          <button
                            className="edit-btn"
                            onClick={this.toggleEdit("editUsername")}
                          >
                            <span role="img" aria-label="edit pencil">
                              EDIT ✏️
                            </span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="editing-bottom-cont">
                        <div className="editing-wrapper">
                          <div className="top-box">
                            <div className="editing-header">
                              <input
                                type="text"
                                placeholder="Enter new username."
                                onChange={this.handleChange("username")}
                              />
                            </div>
                            <div className="editing input-form">
                              <button
                                className="ein se btn"
                                onClick={this.handleUpdate("username")}
                              >
                                <span
                                  role="img"
                                  className="ein-se check"
                                  aria-label="save-edit"
                                >
                                  ✓
                                </span>
                              </button>
                              <button
                                className="ein se btn"
                                onClick={this.toggleEdit("editUsername")}
                              >
                                <span
                                  role="img"
                                  className="ein-se x"
                                  aria-label="x-quit-edit"
                                >
                                  ✘
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="profile-fields">
                  <div className="profile-title">
                    <div className="profile-content-header">Name, Location</div>
                    <div className="edit-bio-wrapper">
                      {!this.state.editBio ? (
                        <div className="toggle-wrapper">
                          <div className="top-box">
                            {user.bio === "" ? (
                              <div className="add-bio-text">
                                <span className="add-bio-text">
                                  Please add name & where you're located
                                </span>
                              </div>
                            ) : (
                              <div className="error-wrapper">
                                <div className="user-content">{user.bio}</div>
                              </div>
                            )}

                            <button
                              className="edit-btn"
                              onClick={this.toggleEdit("editBio")}
                            >
                              <span
                                className="edit-btn-span"
                                role="img"
                                aria-label="edit pencil"
                              >
                                EDIT ✏️
                              </span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="editing-wrapper">
                          <div className="top-box">
                            <div className="editing-header">
                              <input
                                type="text"
                                placeholder=" location of origin."
                                onChange={this.handleChange("bio")}
                              />
                            </div>
                            <div className="editing input-form">
                              <button
                                onClick={this.handleUpdate("bio")}
                                className="ein se btn"
                              >
                                <span
                                  className="ein-se check"
                                  role="img"
                                  aria-label="save-edit"
                                >
                                  ✓
                                </span>
                              </button>
                              <button
                                onClick={this.toggleEdit("editBio")}
                                className="ein se btn"
                              >
                                <span
                                  className="ein-se x"
                                  srole="img"
                                  aria-label="x-quit-edit"
                                >
                                  ✘
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/search" className="buy-link-btn a">
            Buy Tickets
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  usersReducer: {
    user: { id, avatar, username, bio },
  },
}) => ({
  id,
  avatar,
  username,
  bio,
});

export default withAuth(connect(mapStateToProps)(Profile));
