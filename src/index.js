import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './App.css';
import App from './App';
import Home from './components/Home';
import UserRegister from './components/UserRegister';
import reportWebVitals from './reportWebVitals';
import MetaMask from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Home />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/MetaMask" element={<MetaMask />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
