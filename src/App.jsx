import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Header from './components/Header';

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}