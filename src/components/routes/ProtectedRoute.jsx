import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../../utils/adminAuth";

const ProtectedRoute = ({ children }) => {
  return isAdminAuthenticated() ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;