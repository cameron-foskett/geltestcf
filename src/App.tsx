import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/login';
import Accounts from './pages/Accounts/accounts';
import { AuthContext } from "./Auth";

import './App.css';

function App() {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("loggenin") || ""
  );

  const setTokens = (data:any) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  // var auth = localStorage.getItem("loggedin")
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
