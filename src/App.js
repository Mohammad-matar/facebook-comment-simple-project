import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { AuthProvider } from "./auth";
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
