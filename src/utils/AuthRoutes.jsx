import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
const AuthRoutes = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
export default AuthRoutes;
