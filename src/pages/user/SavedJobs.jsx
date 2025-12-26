import UserNavbar from "../../components/UserNavbar";

export default function SavedJobs() {
  const saved =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>

          {saved.length === 0 && <p>No saved jobs</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saved.map((job) => (
              <div key={job.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{job.title}</h3>
                <p>{job.company}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.skills.map((s, i) => (
                    <span key={i}
                      className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
