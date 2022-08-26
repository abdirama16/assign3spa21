import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import Service from './components/Service';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="signUp" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);
