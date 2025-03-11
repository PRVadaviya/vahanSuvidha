import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state.login.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default ProtectedRoute;
