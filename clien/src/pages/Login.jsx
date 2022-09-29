// import styled from "@emotion/styled";
// import { LockOutlined } from "@mui/icons-material";
// import {
//   Avatar,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Link,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useContext } from "react";
// import { useRef } from "react";
// import { loginCall } from "../apiCalls";
// import { AppContext } from "../State";

// const Login = () => {
//    const email = useRef();
//    const password = useRef();
//    const { state, dispatch } = useContext(AppContext);

//    const loginCall = async (userCredential) => {
//      const res = await axios.post("/auth/login", {
//        email: email.current.value,
//        password: password.current.value,
//      });
//      const user = res.data;
//      dispatch({
//        type: "LOGIN_SUCCESS",
//        payload: { user },
//      });
//    };
//    const handleClick = (e) => {
//      e.preventDefault();
//      loginCall({
//        email: email.current.value,
//        password: password.current.value,
//      });
//      console.log(state.user);
//    };

//   const paperStyle = {
//     padding: 20,
//     height: "70vh",
//     width: 280,
//     margin: "20px auto",
//   };
//   const avatarStyle = {
//     backgroundColor: "#1bbd7e",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "5px",
//   };
//   const btnstyle = { margin: "8px 0" };
//   const Text = styled(TextField)(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "20px",
//   }));
//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={avatarStyle}>
//             <LockOutlined />
//           </Avatar>
//           <h2
//             style={{
//               marginBottom: "5px",
//             }}
//           >
//             Sign In
//           </h2>
//         </Grid>
//         <form className="loginBox" onSubmit={handleClick}>
//           <Text
//             label="Username"
//             placeholder="Enter username"
//             fullWidth
//             required
//             ref={email}
//           />
//           <Text
//             label="Password"
//             placeholder="Enter password"
//             type="password"
//             fullWidth
//             required
//             ref={password}
//           />
//           <FormControlLabel
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               marginBottom: "20px",
//             }}
//             control={<Checkbox name="checkedB" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             color="primary"
//             variant="contained"
//             style={btnstyle}
//             fullWidth
//           >
//             Sign in
//           </Button>
//         </form>
//         <Typography>
//           <Link href="#">Forgot password ?</Link>
//         </Typography>
//         <Typography>
//           Do you have an account ?<Link href="#">Sign Up</Link>
//         </Typography>
//       </Paper>
//     </Grid>
//   );
// };

// export default Login;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ça fonctionne

// import axios from "axios";
// import {  useContext, useRef } from "react";
// import "./login.css";
// import { AppContext } from "../State";

// export default function Login() {
//   const email = useRef();
//   const password = useRef();
//  const { state, dispatch } = useContext(AppContext);

//  const loginCall = async (userCredential) => {
//   const res =  await axios.post("/auth/login", {
//      email: email.current.value,
//      password: password.current.value,
//    });
// const user= res.data;
//    dispatch({
//      type: "LOGIN_SUCCESS",
//      payload: { user },
//    });
//  };
//   const handleClick =(e) => {
//     e.preventDefault();
//    loginCall({  email: email.current.value,
//     password: password.current.value})
//     console.log(state.user);
//   };

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">Lamasocial</h3>
//           <span className="loginDesc">
//             Connect with friends and the world around you on Lamasocial.
//           </span>
//         </div>
//         <div className="loginRight">
//           <form className="loginBox" onSubmit={handleClick}>
//             <input
//               placeholder="Email"
//               type="email"
//               required
//               className="loginInput"
//               ref={email}
//             />
//             <input
//               placeholder="Password"
//               type="password"
//               required
//               minLength="6"
//               className="loginInput"
//               ref={password}
//             />
//             <button className="loginButton" type="submit" >

//             </button>
//             <span className="loginForgot">Forgot Password?</span>
//             <button className="loginRegisterButton">

//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import axios from "axios";
// import {  useContext, useRef } from "react";
// import "./login.css";
// import { AppContext } from "../State";

// export default function Login() {
//   const email = useRef();
//   const password = useRef();
//  const { state, dispatch } = useContext(AppContext);

//  const loginCall = async (userCredential) => {
//   const res =  await axios.post("/auth/login", {
//      email: email.current.value,
//      password: password.current.value,
//    });
//    console.log(res.data);
//  };
//   const handleClick =(e) => {
//     e.preventDefault();
//   const user = loginCall({  email: email.current.value,
//     password: password.current.value})

//    dispatch({
//      type: "LOGIN_SUCCESS",
//      payload: { user},
//    });
//        console.log(state.user);
//   };

// code front pris du web
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { useContext } from "react";
import axios from "axios";
import { AppContext } from "../State";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  // const email = useRef();
  // const password = useRef();
  const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
  const { state, dispatch } = useContext(AppContext);

  const loginCall = async (userCredential) => {
    try {
      const res = await axios.post("/auth/login", {
        email: userCredential.email,
        password: userCredential.password,
      });
      const user = res.data;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
const user = {
  email: email,
  password: password,
};
console.log(user)
    loginCall(user);
    setemail("");
    setpassword("");
    console.log(state.user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
