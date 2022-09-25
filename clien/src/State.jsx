import React, { createContext, useReducer } from "react";

let AppContext = createContext({});

const initialState = {
  mode: "light",
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setmode": {
      return { ...state, mode: action.payload };
    }

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
