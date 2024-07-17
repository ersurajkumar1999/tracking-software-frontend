import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


let userData = Cookies.get('user'); // Assuming 'user' cookie contains JSON string of user data
if (userData) {
  userData = JSON.parse(userData);
}

const initialState = {
  user: userData ?? null,
  isLoggedIn: userData ? true : false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, setUserInfo, userInfo } = userSlice.actions;

export default userSlice.reducer;
