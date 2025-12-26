import { useState } from "react";
import { getUsers, saveUsers } from "../../utils/storage";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleRegister = () => {
    if (!user.name || !user.email || !user.password) {
      alert("Fill all fields ❗");
      return;
    }

    const users = getUsers();
    users.push(user);
    saveUsers(users);

    alert("Account created successfully ✅");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#f8fafc] to-[#ecfeff]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
            IT
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join IT Job Portal
        </p>

        {/* NAME */}
        <input
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        {/* ROLE */}
        <select
          className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={user.role}
          onChange={(e) =>
            setUser({ ...user, role: e.target.value })
          }
        >
          <option value="user">Job Seeker</option>
          <option value="admin">Admin</option>
        </select>

        {/* REGISTER BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 font-semibold text-black hover:scale-105 transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
