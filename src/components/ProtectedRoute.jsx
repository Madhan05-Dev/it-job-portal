import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/storage";

export default function ProtectedRoute({ children, role }) {
  const user = getCurrentUser();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Role check (admin only)
  if (role && user.role !== role) {
    return <Navigate to="/jobs" />;
  }

  return children;
}
