import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuth) {
      dispatch(logout());
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-gray-200 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">To-Do App</h1>
      <button
        onClick={handleAuthClick}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
      >
        {isAuth ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}