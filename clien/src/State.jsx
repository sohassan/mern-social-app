import React, { createContext, useReducer } from "react";

let AppContext = createContext({});

const initialState = {
  mode: "light",
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setmode": {
      return { ...state, mode: action.payload };
    }
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS": {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.payload.user,
      };
    }
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      break;
  }
};

function AppContextProvider(props) {
  const appState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(reducer, appState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
