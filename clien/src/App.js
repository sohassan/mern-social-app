import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { AppContext } from "./State";

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
       <Home/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
