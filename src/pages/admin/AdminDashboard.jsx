import AdminLayout from "../../layouts/AdminLayout";
import { defaultJobs } from "../../data/jobs";
import { getUsers } from "../../utils/storage";

export default function AdminDashboard() {
  const users = getUsers();
  const adminJobs =
    JSON.parse(localStorage.getItem("adminJobs")) || [];
  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  return (
    <AdminLayout>
      {/* ================= TOP STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Interviews Schedule"
          value="86"
          color="from-purple-600 to-indigo-600"
          icon="📅"
        />
        <StatCard
          title="Applications Sent"
          value={applications.length}
          color="from-blue-500 to-cyan-500"
          icon="📤"
        />
        <StatCard
          title="Profile Viewed"
          value={users.length * 3}
          color="from-emerald-500 to-green-500"
          icon="👤"
        />
        <StatCard
          title="Unread Messages"
          value="93"
          color="from-lime-500 to-green-400"
          icon="✉️"
        />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= PROFILE CARD ================= */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=12"
                className="w-28 h-28 rounded-full object-cover"
                alt="admin"
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse" />
            </div>

            <h3 className="mt-4 text-lg font-bold">
              Oda Dink
            </h3>
            <p className="text-gray-500 text-sm">
              Super Admin
            </p>
          </div>

          {/* SKILL RINGS */}
          <div className="flex justify-around mt-6">
            <Ring percent={66} label="PHP" />
            <Ring percent={31} label="Vue" />
            <Ring percent={7} label="Laravel" />
          </div>

          {/* RECENT ACTIVITIES */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">
              Recent Activities
            </h4>

            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-3 mb-3"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  📌
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Application accepted in 3 Vacancy
                  </p>
                  <p className="text-xs text-gray-400">
                    12h ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CHART AREA ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Vacancy Stats
            </h3>
            <select className="border rounded px-3 py-1 text-sm">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>

          {/* LEGEND */}
          <div className="flex gap-6 text-sm mb-4">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-indigo-500 rounded-full" />
              Applications
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full" />
              Interviews
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              Rejected
            </span>
          </div>

          {/* FAKE GRAPH */}
          <div className="h-64 bg-gradient-to-b from-gray-50 to-white rounded-xl flex items-end gap-4 px-6 pb-6">
            {[80, 50, 30, 70, 90, 40, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-xl"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= RECOMMENDED JOBS ================= */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">
          Recommended Jobs
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <JobMiniCard
            title="Senior Programmer"
            company="Klean n Clin Studios"
            salary="$14,000 - $25,000"
            tag="REMOTE"
          />
          <JobMiniCard
            title="Intern UX Designer"
            company="Maximoz Team"
            salary="$14,000 - $25,000"
            tag="FULLTIME"
          />
        </div>
      </div>
    </AdminLayout>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, color, icon }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} rounded-2xl p-6 text-white shadow-lg`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-4xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Ring({ percent, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border-4 border-gray-200 relative flex items-center justify-center">
        <span className="text-sm font-bold">
          {percent}%
        </span>
      </div>
      <p className="text-xs mt-1">{label}</p>
    </div>
  );
}

function JobMiniCard({ title, company, salary, tag }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{company}</p>
      <p className="text-sm font-medium mt-2">
        {salary}
      </p>

      <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">
        {tag}
      </span>
    </div>
  );
}
