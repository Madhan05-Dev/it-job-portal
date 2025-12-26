import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../utils/storage";

export default function UserNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { name: "Jobs", path: "/jobs" },
    // { name: "Saved", path: "/saved" },
    { name: "Applications", path: "/applications" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        } bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-xl`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          
          {/* Logo */}
          <div
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-black">
              IT
            </div>
            <span className="font-bold tracking-wide text-lg group-hover:text-emerald-400 transition">
              Job Portal
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menu.map((m) => (
              <Link
                key={m.path}
                to={m.path}
                className={`relative px-3 py-1 rounded-full transition ${
                  location.pathname === m.path
                    ? "bg-white/20 text-emerald-400"
                    : "hover:bg-white/10"
                }`}
              >
                {m.name}
              </Link>
            ))}

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="ml-2 px-4 py-1.5 rounded-full bg-red-500/90 hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 mx-4 rounded-2xl bg-black/80 backdrop-blur-lg text-white p-4 space-y-3 animate-slideDown">
            {menu.map((m) => (
              <Link
                key={m.path}
                to={m.path}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded hover:bg-white/10"
              >
                {m.name}
              </Link>
            ))}
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="w-full text-left py-2 px-3 text-red-400 hover:bg-white/10 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
