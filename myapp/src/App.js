import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/loginForm/login';
import Home from "./components/home/home"

function App() {

  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  const navigate = useNavigate();
  useEffect(() => {
    if (username !== "admin" && password !== "admin")
      navigate('/');
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
