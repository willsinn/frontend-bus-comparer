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
        <div
          className="body-container"
          style={{ width: "60%", flexDirection: "column" }}
        >
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img className="profile-avatar" src={user.avatar} alt="" />
              <div className="avatar-btn-wrapper">
                {!this.state.editAvatar ? (
                  <>
                    <div className="avatar-btn">
                      <button
                        className="edit-btn login-btn"
                        onClick={this.toggleEdit("editAvatar")}
                      >
                        Update
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="editing-container">
                    <div className="editing-header">
                      <div className="edit-title">Update image address</div>
                      <input
                        className="edit-input-field"
                        style={{ margin: "0", borderRadius: "2px" }}
                        type="text"
                        placeholder="Paste new image address."
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
          </div>

          <div className="edit-section">
            <div className="editing-container">
              <div className="edit-text-fields-wrapper">
                <div className="editing-header">
                  <div className="edit-title">Username</div>
                </div>
                <div className="edit-fields-wrapper">
                  {!this.state.editUsername ? (
                    <div className="toggle-wrapper">
                      <div className="error-wrapper">
                        <div className="user-content">{user.username}</div>
                      </div>
                      <div className="avatar-btn">
                        <button
                          className="edit-btn login-btn"
                          onClick={this.toggleEdit("editUsername")}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <div className="editing-header">
                        <input
                          className="edit-input-field"
                          style={{ margin: "0", borderRadius: "2px" }}
                          type="text"
                          placeholder="Enter new username."
                          onChange={this.handleChange("username")}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="edit-btn login-btn"
                          onClick={this.handleUpdate("username")}
                        >
                          <span>Save</span>
                        </button>
                        <button
                          className="edit-btn login-btn"
                          onClick={this.toggleEdit("editUsername")}
                        >
                          <span>Exit</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="edit-section" style={{ marginBottom: "40px" }}>
            <div className="editing-container">
              <div className="edit-text-fields-wrapper">
                <div className="editing-header">
                  <div className="edit-title">About</div>
                </div>
                <div className="edit-fields-wrapper">
                  {!this.state.editBio ? (
                    <div className="toggle-wrapper">
                      <div className="error-wrapper">
                        {user.bio ? (
                          <div className="user-content">{user.bio}</div>
                        ) : (
                          <div
                            className="user-content"
                            style={{ color: "darkgray" }}
                          >
                            Record your bio now.
                          </div>
                        )}
                      </div>
                      <div className="avatar-btn">
                        <button
                          className="edit-btn login-btn"
                          onClick={this.toggleEdit("editBio")}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <div className="editing-header">
                        <input
                          className="edit-input-field"
                          style={{ margin: "0", borderRadius: "2px" }}
                          type="text"
                          placeholder="Enter new username."
                          onChange={this.handleChange("bio")}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="edit-btn login-btn"
                          onClick={this.handleUpdate("bio")}
                        >
                          <span>Save</span>
                        </button>
                        <button
                          className="edit-btn login-btn"
                          onClick={this.toggleEdit("editBio")}
                        >
                          <span>Exit</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
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
