import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth";


const PrivateRoutes = () => {
  const auth = useAuth();
  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;