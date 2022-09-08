import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/login';
import Accounts from './pages/Accounts/accounts';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          <Route path="accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
