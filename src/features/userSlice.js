import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


let userData = Cookies.get('user'); // Assuming 'user' cookie contains JSON string of user data
if (userData) {
  userData = JSON.parse(userData);
  console.log("userData", userData);
}


const initialState = {
  user: userData ?? null,
  isLoggedIn: userData ? true : false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
