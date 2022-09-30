import axios from "axios";

 export const loginCall = async (userCredential,dispatch) => {
  dispatch({ type: "LOGIN_START" });
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
    }catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
  };