import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";

export default function Applications() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const updateStatus = (index, status) => {
    const updated = [...applications];
    updated[index].status = status;
    setApplications(updated);
    localStorage.setItem("applications", JSON.stringify(updated));
  };

  const filteredApps = applications.filter((app) => {
    if (!fromDate && !toDate) return true;

    const applied = new Date(app.appliedAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    if (from && applied < from) return false;
    if (to && applied > to) return false;

    return true;
  });

  return (
    <>
      <AdminNavbar />

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">
            User Applications
          </h1>

          {/* Date Filter */}
          <div className="bg-white p-4 rounded shadow mb-6 flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Job</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Applied Date</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredApps.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="p-4 text-center text-gray-500"
                    >
                      No applications found
                    </td>
                  </tr>
                )}

                {filteredApps.map((app, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3">{app.userEmail}</td>
                    <td className="p-3">{app.title}</td>
                    <td className="p-3">{app.company}</td>
                    <td className="p-3 text-xs">
                      {app.appliedAt}
                    </td>
                    <td className="p-3">
                      <select
                        value={app.status}
                        onChange={(e) =>
                          updateStatus(index, e.target.value)
                        }
                        className="border rounded p-1"
                      >
                        <option>Applied</option>
                        <option>Shortlisted</option>
                        <option>Selected</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
