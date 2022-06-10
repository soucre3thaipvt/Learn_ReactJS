import React from 'react';
import HomePage from './pages/HomePages'
import PersonPage from './pages/PersonPages'
import ProductPage from './pages/ProductPages'
import SettingPage from './pages/SettingPages'
import ChatPage from './pages/ChatPages'
import LoginPage from './pages/LoginPages'
import SignUpPage from './pages/SignUp'
import ExamplePage from './pages/ExamplePages'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
