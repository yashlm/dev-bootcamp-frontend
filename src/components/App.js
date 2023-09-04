import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Register from '../pages/register';
import '../css/App.css';

const App = () => {
  return (
    <>
      {/* <h1>App</h1> */}
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Router>
      </>
  );
};

export default App;
