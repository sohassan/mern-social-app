import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { AppContext } from "./State";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
        <Router forceRefresh={true}>
          <Switch>
            <Route exact path="/">
              {state.user ? <Redirect to={`/profile/${state.user.username}`} /> : <Login />}
            </Route>
            <Route exact path="/profile/:username">
              <Home />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
