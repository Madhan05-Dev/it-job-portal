import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../utils/storage";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Jobs", path: "/admin/jobs" },
    { name: "Users", path: "/admin/users" },
    { name: "Applications", path: "/admin/applications" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#020617] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* LEFT BRAND */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/admin")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center font-bold text-black">
            IT
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">
              Admin Panel
            </h1>
            <p className="text-xs text-gray-300">
              Job Portal Control
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`relative transition ${
                location.pathname === l.path
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {l.name}
              {location.pathname === l.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex items-center gap-4">
          {/* PROFILE */}
          <div className="hidden md:flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="admin"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-xs">
              <p className="font-semibold">Oda Dink</p>
              <p className="text-gray-300">Super Admin</p>
            </div>
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="bg-red-500/90 hover:bg-red-600 px-4 py-1.5 rounded-full text-sm font-semibold transition"
          >
            Logout
          </button>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#020617] text-gray-200 px-6 py-4 space-y-3 animate-slideDown">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className="block text-sm hover:text-emerald-400"
            >
              {l.name}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full mt-2 bg-red-500 py-2 rounded text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
