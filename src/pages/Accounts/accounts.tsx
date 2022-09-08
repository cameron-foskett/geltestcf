import React, {useEffect} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Accounts(auth:any) {
  const nav = useNavigate();
  
  useEffect(()=>{
    if(!auth){
      nav('/')
    }
  },[auth])

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ACCOUNTS
        </p>
      </header>
    </div>
  );
}
