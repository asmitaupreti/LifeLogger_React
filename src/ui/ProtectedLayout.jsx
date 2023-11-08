import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedLayout = ({ children }) => {
  const { auth } = useAuth();

  return auth?.user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedLayout;
