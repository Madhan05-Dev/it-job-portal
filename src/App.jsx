import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ================= AUTH =================
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// ================= USER =================
import UserHome from "./pages/user/UserHome";
import JobsIndeedStyle from "./pages/user/JobsIndeedStyle";
import MyApplications from "./pages/user/MyApplications";
import SavedJobs from "./pages/user/SavedJobs";
import Profile from "./pages/user/Profile";

// ================= ADMIN =================
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageUsers from "./pages/admin/ManageUsers";
import Applications from "./pages/admin/Applications";

// ================= PROTECTION =================
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= DEFAULT ================= */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= USER ================= */}
        <Route
          path="/home"
          element={
            <ProtectedRoute role="user">
              <UserHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute role="user">
              <JobsIndeedStyle />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <ProtectedRoute role="user">
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/saved"
          element={
            <ProtectedRoute role="user">
              <SavedJobs />
            </ProtectedRoute>
          }
        />

        ✅ {/* PROFILE ROUTE — THIS WAS MISSING */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute role="user">
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute role="admin">
              <ManageJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/applications"
          element={
            <ProtectedRoute role="admin">
              <Applications />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
