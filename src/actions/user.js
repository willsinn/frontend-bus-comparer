import { fetchUrl } from "../urls.js";
export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATING_USER" });
    fetch(`${fetchUrl}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      /* {username: will, pw: will} */
      .then((JSONResponse) => {
        localStorage.setItem("jwt", JSONResponse.jwt);
        dispatch({ type: "SET_CURRENT_USER", payload: JSONResponse.user });
      })
      .catch((r) =>
        r
          .json()
          .then((e) => dispatch({ type: "FAILED_LOGIN", payload: e.message }))
      );
  };
};

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser()); //tells the app we are fetching
    fetch(`${fetchUrl}/api/v1/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)));
  };
};

export const setUpUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATING_USER" });
    fetch(`${fetchUrl}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
          avatar: user.avatar,
        },
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      /* {username: will, pw: will} */
      .then((JSONResponse) => {
        localStorage.setItem("jwt", JSONResponse.jwt);
        dispatch({ type: "SET_CURRENT_USER", payload: JSONResponse.user });
      });
    // .catch((r) =>
    //   r
    //     .json()
    //     .then((e) => dispatch({ type: "FAILED_LOGIN", payload: e.message }))
    // );
  };
};
//
// export const setUpUser = () => {
//   return (dispatch) => {
//     dispatch({ type: 'SIGNUP_USER'})
//     fetch('https://backend-final-project.herokuapp.com/api/v1/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json',
//         Accept: 'application/json'
//       }
//     })
//
//   }
// }

export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const failedLogin = (errorMsg) => ({
  type: "FAILED_LOGIN",
  payload: errorMsg,
});

export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });
