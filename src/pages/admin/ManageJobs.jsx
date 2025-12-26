import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";

export default function ManageJobs() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("adminJobs")) || []
  );

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
    skills: "",
  });

  const addJob = () => {
    if (!form.title || !form.company) return;

    const newJob = {
      id: Date.now(),
      title: form.title,
      company: form.company,
      location: form.location,
      experience: form.experience,
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    const updated = [...jobs, newJob];
    setJobs(updated);
    localStorage.setItem("adminJobs", JSON.stringify(updated));

    setForm({
      title: "",
      company: "",
      location: "",
      experience: "",
      skills: "",
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add New Job</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Job Title" className="border p-2"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input placeholder="Company" className="border p-2"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <input placeholder="Location" className="border p-2"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <input placeholder="Experience" className="border p-2"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />
            <input
              placeholder="Required Skills (comma separated)"
              className="border p-2 md:col-span-2"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
            />
          </div>

          <button
            onClick={addJob}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Add Job
          </button>
        </div>
      </div>
    </>
  );
}
