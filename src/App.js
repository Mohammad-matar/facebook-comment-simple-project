import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
