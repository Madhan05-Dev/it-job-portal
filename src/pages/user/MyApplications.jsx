import UserNavbar from "../../components/UserNavbar";
import { getCurrentUser } from "../../utils/storage";

export default function MyApplications() {
  const user = getCurrentUser();

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const myApps = applications.filter(
    (a) => a.userEmail === user.email
  );

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            My Applications
          </h2>

          {myApps.length === 0 && (
            <p className="text-gray-600">
              No applications yet.
            </p>
          )}

          <div className="space-y-4">
            {myApps.map((app, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">
                    {app.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {app.company} – {app.location}
                  </p>
                  <p className="text-xs text-gray-400">
                    Applied on: {app.appliedAt}
                  </p>
                </div>

                <span className="px-3 py-1 text-sm rounded bg-yellow-100 text-yellow-700">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
