import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { AppContext } from "./State";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Chat from "./pages/Chat.jsx";
import Chat2 from "./pages/Chat2.jsx";
import Error from "./pages/Error.jsx";

function App() {
  const { state } = useContext(AppContext);
  const darkTheme = createTheme({
    palette: {
      mode: state.mode,
      primary: {
        main: "#3D8361",
        light: "skyblue",
      },
      secondary: {
        main: "#15c630",
      },
      otherColor: {
        main: "#999",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Router forceRefresh={true}> */}
        <Router>
          <Switch>
            <Route exact path="/">
              {state.user ? <Home /> : <Login />}
            </Route>
            <Route exact path="/Login">
              {state.user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/Signup">
              {state.user ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route exact path="/profile/:username">
              {state.user ? <Profile /> : <Login />}
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/chat2">
              <Chat2 />
            </Route>
            <Route path="">
              <Error />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
