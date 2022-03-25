import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerUserSuccess: (state, action) => {
        state.isFetching = false;
        state.users.push(action.payload);
    },
    registerUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    },

  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure
  
} = userSlice.actions;
export default userSlice.reducer;