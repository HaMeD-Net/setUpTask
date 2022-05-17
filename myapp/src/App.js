import { Routes, Route } from "react-router-dom"

import './App.css';
import 'antd/dist/antd.css';
import Login from './components/loginForm/login';
import Home from "./components/home/home"

function App() {
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
