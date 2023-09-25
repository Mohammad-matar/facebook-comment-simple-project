import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

import './App.css';
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
