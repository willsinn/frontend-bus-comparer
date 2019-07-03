(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/buses.jpg */ "./src/images/buses.jpg"));

// Module
exports.push([module.i, "* {\n  font-family: 'Helvetica Neue', Arial;\n}\n\nbody {\n  margin: 0;\n}\n\n.search-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.search-list {\n  padding: 10px;\n  width: 40%;\n  background: antiquewhite;\n}\n.search-result-company {\n  justify-content: center;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.search-list-item {\n  padding: 10px 0;\n  border-bottom: 1px solid gray;\n}\n.search-list-item:last-child {\n    border: 0;\n}\n\n.search-info {\n  display: block;\n}\n\n.login-page,\n.signup-page {\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n  background-size: cover;\n}\n\n.navigation {\n  height: 40px;\n  background-color: #3f92b9;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.navigation-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.nav-menu-item {\n  margin: 5px;\n}\n\n.form-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.form-box {\n  background: #3f92b9;\n  padding: 30px 20px;\n  color: white;\n}\n\n.profile-page {\n  display:flex;\n  justify-content: center;\n  align-content: center;\n  padding: 15px;\n}\n.profile-wrapper {\n  border: 2px solid black;\n  width: 400px;\n  height: 500px;\n}\n.profile-avatar {\n  width: 320px;\n  height: 320px;\n}\n.edit-fields-wrapper {\n  margin-top: 40px;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n.avatar-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n}\n.avatar-btn-wrapper {\n  margin-top: 10px;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n.avatar-frame {\n  border: 3px inset #47aedc96;\n  border-radius: 4px;\n}\n.profile-fields {\n  display:flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.edit-text-fields-wrapper {\n\n}\n.editing-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.edit-user-text {\n  display:flex;\n  justify-content: space-between;\n}\n.toggle-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoginForm */ "./src/components/LoginForm.js");
/* harmony import */ var _components_SignupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SignupForm */ "./src/components/SignupForm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Search */ "./src/components/Search.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/App.js";










const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/profile",
    component: _components_Profile__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/search",
    component: _components_Search__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _components_SignupForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(App)); //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! exports provided: loginUser, fetchCurrentUser, setUpUser, setCurrentUser, failedLogin, authenticatingUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpUser", function() { return setUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedLogin", function() { return failedLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticatingUser", function() { return authenticatingUser; });
const loginUser = (username, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTHENTICATING_USER'
    });
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    /* {username: will, pw: will} */
    .then(JSONResponse => {
      localStorage.setItem('jwt', JSONResponse.jwt);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: JSONResponse.user
      });
    }).catch(r => r.json().then(e => dispatch({
      type: 'FAILED_LOGIN',
      payload: e.message
    })));
  };
};
const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return dispatch => {
    dispatch(authenticatingUser()); //tells the app we are fetching

    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('jwt'))
      }
    }).then(response => response.json()).then(JSONResponse => dispatch(setCurrentUser(JSONResponse.user)));
  };
};
const setUpUser = (username, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTHENTICATING_USER'
    });
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    }).then(response => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    /* {username: will, pw: will} */
    .then(JSONResponse => {
      console.log('%c INSIDE YE OLDE .THEN', 'color: navy');
      localStorage.setItem('jwt', JSONResponse.jwt);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: JSONResponse.user
      });
    }).catch(r => r.json().then(e => dispatch({
      type: 'FAILED_LOGIN',
      payload: e.message
    })));
  };
}; //
// export const setUpUser = () => {
//   return (dispatch) => {
//     dispatch({ type: 'SIGNUP_USER'})
//     fetch('http://localhost:3000/api/v1/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json',
//         Accept: 'application/json'
//       }
//     })
//
//   }
// }

const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData
});
const failedLogin = errorMsg => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
});
const authenticatingUser = () => ({
  type: 'AUTHENTICATING_USER'
});

/***/ }),

/***/ "./src/components/LoginForm.js":
/*!*************************************!*\
  !*** ./src/components/LoginForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user */ "./src/actions/user.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/LoginForm.js";

 // import { bindActionCreators } from 'redux'





class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: '',
      password: '' // handleChange = (e, { name, value }) => this.setState({ [name]: value })

    };

    this.handleChange = (e, semanticInputData) => {
      // this.setState({ [semanticInputData.name]: semanticInputData.value })
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleLoginSubmit = e => {
      //semantic forms preventDefault for you
      // e.preventDefault()
      this.props.loginUser(this.state.username, this.state.password); //comes from mapDispatchToProps

      this.setState({
        username: '',
        password: ''
      }); //reset form to initial state
    };
  }

  render() {
    console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props);
    return this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onSubmit: this.handleLoginSubmit,
      size: "mini",
      key: "mini",
      loading: this.props.authenticatingUser,
      error: this.props.failedLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
      error: true,
      header: this.props.failedLogin ? this.props.error : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
      widths: "equal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
      label: "username",
      placeholder: "username",
      name: "username",
      onChange: this.handleChange,
      value: this.state.username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
      type: "password",
      label: "password",
      placeholder: "password",
      name: "password",
      onChange: this.handleChange,
      value: this.state.password,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Login"))))));
  }

} // const mapStateToProps = (reduxStoreState) => {
//   return {
//     authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
//     failedLogin: reduxStoreState.usersReducer.failedLogin,
//     error: reduxStoreState.usersReducer.error,
//     loggedIn: reduxStoreState.usersReducer.loggedIn
//   }
// }


const mapStateToProps = ({
  usersReducer: {
    authenticatingUser,
    failedLogin,
    error,
    loggedIn
  }
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
}); // const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (username, password) => dispatch(loginUser(username, password))
//   }
// }
// const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
// const connectedToReduxLoginForm = connectedToReduxHOC(LoginForm)
// const connectedToReduxHOCWithRouterLoginForm = withRouter(connectedToReduxLoginForm)
//
// export default connectedToReduxHOCWithRouterLoginForm


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  loginUser: _actions_user__WEBPACK_IMPORTED_MODULE_3__["loginUser"]
})(LoginForm)));

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/Nav.js";





const Nav = ({
  user: {
    loggedIn
  },
  location: {
    pathname
  }
}) => {
  const handleLogoutClick = e => {
    localStorage.clear();
    document.location.reload();
    window.location.href = '/';
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    className: "nav-menu-item",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
    to: "/profile",
    name: "Profile",
    active: pathname === '/profile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    className: "nav-menu-item",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
    to: "/search",
    name: "Search",
    active: pathname === '/search',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-profile-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "nav-menu-item",
    onClick: e => {
      handleLogoutClick(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Logout"))) : null);
};

const mapStateToProps = ({
  usersReducer: user
}) => ({
  user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Nav)));

/***/ }),

/***/ "./src/components/NotFound.js":
/*!************************************!*\
  !*** ./src/components/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/NotFound.js";



const NotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  size: "huge",
  inverted: true,
  color: "purple",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Page Not Found lol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
  src: "https://thumbs.dreamstime.com/z/senior-man-shrugging-his-shoulders-8775727.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

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

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchList */ "./src/components/SearchList.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/Search.js";



class Search extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      searches: []
    };

    this.generateSearchList = () => this.state.searches.map(search => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: search.id,
        search: search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/searches', {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.jwt)
      }
    }).then(r => r.json()).then(searches => {
      this.setState({
        searches
      });
    });
  }

  render() {
    console.log(this.state);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "search-console",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.generateSearchList()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/SearchList.js":
/*!**************************************!*\
  !*** ./src/components/SearchList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchListItem */ "./src/components/SearchListItem.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/SearchList.js";



const SearchList = props => {
  const busList = props.search;

  const generateItems = () => busList.items.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: item.id,
    item: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-result-company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, busList.company), generateItems());
};

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./src/components/SearchListItem.js":
/*!******************************************!*\
  !*** ./src/components/SearchListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/SearchListItem.js";


const SearchListItem = props => {
  console.log(props);
  const bus = props.item;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Price: $", bus.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Time: ", bus.bus_time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Location: ", bus.location));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchListItem);

/***/ }),

/***/ "./src/components/SignupForm.js":
/*!**************************************!*\
  !*** ./src/components/SignupForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user */ "./src/actions/user.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/components/SignupForm.js";






class SignupForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      error: ''
    };

    this.handleChange = fieldType => {
      return event => {
        this.setState({
          [fieldType]: event.target.value
        });
      };
    };

    this.handleSubmit = () => {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({
          error: 'Passwords dont match'
        });
      } else {
        this.props.setUpUser(this.state.username, this.state.password);
      }
    };
  }

  render() {
    const signupFields = ['username', 'password', 'confirmPassword'];
    return this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onSubmit: this.handleSubmit,
      size: "mini",
      key: "mini",
      loading: this.props.authenticatingUser,
      error: this.props.failedLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
      error: true,
      header: this.state.error ? this.state.error : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
      widths: "equal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, signupFields.map(field => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
        type: field,
        label: field,
        placeholder: field,
        name: field,
        onChange: this.handleChange(field),
        value: this.state[field],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Signup")))));
  }

}

const mapStateToProps = ({
  usersReducer: {
    authenticatingUser,
    loggedIn
  }
}) => {
  return {
    loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUpUser: (username, password) => dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_2__["setUpUser"])(username, password))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SignupForm));

/***/ }),

/***/ "./src/hocs/withAuth.js":
/*!******************************!*\
  !*** ./src/hocs/withAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user */ "./src/actions/user.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/hocs/withAuth.js";


 // import * as actions from '../actions'




const withAuth = WrappedComponent => {
  class AuthorizedComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple');
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser();
    }

    render() {
      console.log('%c INSIDE RENDER FOR HOC', 'color: green');

      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Loader"], {
          active: true,
          inline: "centered",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: "/login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      }
    }

  }

  const mapStateToProps = reduxStoreState => {
    return {
      loggedIn: reduxStoreState.usersReducer.loggedIn,
      authenticatingUser: reduxStoreState.usersReducer.authenticatingUser
    };
  }; // const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  //   return {
  //     fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  //   }
  // }


  const mapDispatchToProps = {
    fetchCurrentUser: _actions_user__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"] // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
    // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
    // return connectedAuthorizedComponent

  };
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./src/images/buses.jpg":
/*!******************************!*\
  !*** ./src/images/buses.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/buses.8d97bfce.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/usersReducer */ "./src/reducers/usersReducer.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/index.js";








 //TODO: move
// import registerServiceWorker from './registerServiceWorker'


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  usersReducer: _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_8__["default"]
}); //TODO: move this too

const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]))); //TODO: move this

console.log("%c INITIAL REDUX STORE", 'color: purple', store.getState());
react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_9__["unregister"](); // <SignupForm />

/***/ }),

/***/ "./src/reducers/usersReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/usersReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_WillSinn_Desktop_dev_flatiron_5MOD_redux_auth_final_project_frontend_final_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    // TODO: move to types
    case 'SET_CURRENT_USER':
      //action.payload { username: 'Chandler Bing', bio: 'my user bio', avatar: 'some image url' }
      return Object(_Users_WillSinn_Desktop_dev_flatiron_5MOD_redux_auth_final_project_frontend_final_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      });

    case 'AUTHENTICATING_USER':
      //tells the app we're fetching
      return Object(_Users_WillSinn_Desktop_dev_flatiron_5MOD_redux_auth_final_project_frontend_final_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticatingUser: true
      });

    case 'AUTHENTICATED_USER':
      return Object(_Users_WillSinn_Desktop_dev_flatiron_5MOD_redux_auth_final_project_frontend_final_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticatingUser: false
      });

    case 'FAILED_LOGIN':
      //for error handling
      return Object(_Users_WillSinn_Desktop_dev_flatiron_5MOD_redux_auth_final_project_frontend_final_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      });

    case 'SIGNUP_USER':
      return {};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/WillSinn/Desktop/dev/flatiron/5MOD-redux-auth/final-project/frontend_final/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map