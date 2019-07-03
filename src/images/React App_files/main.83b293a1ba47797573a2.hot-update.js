webpackHotUpdate("main",{

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hocs/withAuth */ "./src/hocs/withAuth.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/Profile.js";




class Profile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      currentUser: {},
      isProfile: true,
      editAvatar: false,
      avatar: '',
      editUsername: false,
      username: '',
      editBio: false,
      bio: ''
    };

    this.toggleEdit = toggleType => {
      return event => {
        this.setState({
          [toggleType]: !this.state[toggleType]
        });
      };
    };

    this.handleChange = fieldType => {
      return event => {
        this.setState({
          [fieldType]: event.target.value
        });
      };
    };

    this.handleUpdate = updateType => {
      switch (updateType) {
        case "avatar":
          return event => {
            this.handleFetch({
              avatar: this.state.avatar
            });
            this.setState({
              editAvatar: false
            });
          };

        case "username":
          return event => {
            this.handleFetch({
              username: this.state.username
            });
            this.setState({
              editUsername: false
            });
          };

        case "bio":
          return event => {
            this.handleFetch({
              bio: this.state.bio
            });
            this.setState({
              editBio: false
            });
          };

        default:
          return;
      }
    };

    this.handleFetch = body => {
      const type = Object.keys(body);
      fetch('http://localhost:3000/api/v1/users/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: "Bearer ".concat(localStorage.getItem('jwt'))
        },
        body: JSON.stringify(body)
      }).then(r => r.json()).then(updatedUser => {
        this.setState({
          currentUser: updatedUser,
          [type]: ''
        });
      });
    };
  }

  render() {
    let user;
    this.state.currentUser.id ? user = this.state.currentUser : user = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-frame",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "profile-avatar",
      src: user.avatar,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar-btn-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, !this.state.editAvatar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.toggleEdit('editAvatar'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, " Change Avatar ") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "New Avatar: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onChange: this.handleChange('avatar'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing input-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleUpdate('avatar'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, " Update ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "edit-fields-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-fields",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "edit-text-fields-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Username")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "edit-user-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, !this.state.editUsername ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toggle-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.toggleEdit('editUsername'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " Change Username "))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onChange: this.handleChange('username'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editing input-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleUpdate('username'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, " Update ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-fields",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })))));
  }

}

const mapStateToProps = ({
  usersReducer: {
    user: {
      avatar,
      username,
      bio
    }
  }
}) => ({
  avatar,
  username,
  bio
}); // const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile


/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Profile)));

/***/ })

})
//# sourceMappingURL=main.83b293a1ba47797573a2.hot-update.js.map