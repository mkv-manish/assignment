import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('authUser'),
  user: localStorage.getItem('authUser') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('authUser', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = '';
      localStorage.removeItem('authUser');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;