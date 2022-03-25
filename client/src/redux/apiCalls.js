import { 
  loginFailure, 
  loginStart, 
  loginSuccess,
  registerUserSuccess,
  registerUserFailure,
  registerUserStart
 } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const registerUser = async (user, dispatch) => {
  dispatch(registerUserStart());
  try {
    const res = await userRequest.post(`/auth/register`, user);
    dispatch(registerUserSuccess(res.data));
  } catch (err) {
    dispatch(registerUserFailure());
  }
};