import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedLayout = ({ children }) => {
  const { auth } = useAuth();

  return auth?.user ? children : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
