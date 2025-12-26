import { useState } from "react";
import UserNavbar from "../../components/UserNavbar";
import JobCard from "../../components/JobCard";
import { defaultJobs } from "../../data/jobs";

export default function JobsIndeedStyle() {
  const adminJobs =
    JSON.parse(localStorage.getItem("adminJobs")) || [];

  const jobs = [...defaultJobs, ...adminJobs];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const [appliedJobs, setAppliedJobs] = useState(
    JSON.parse(localStorage.getItem("appliedJobs")) || []
  );

  const applyJob = (job) => {
    if (appliedJobs.includes(job.id)) return;

    const updated = [...appliedJobs, job.id];
    setAppliedJobs(updated);
    localStorage.setItem("appliedJobs", JSON.stringify(updated));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      <UserNavbar />

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative bg-cover bg-center h-[420px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <p className="text-sm mb-2">
            We have 850,000 great job offers you deserve!
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Dream Job <br /> is Waiting
          </h1>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-3 text-black max-w-4xl shadow-lg">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="border p-3 rounded w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="bg-emerald-500 text-black font-semibold px-6 py-3 rounded hover:bg-emerald-400 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Search Millions of Jobs",
            "Easy To Manage Jobs",
            "Top Careers",
            "Search Expert Candidates",
          ].map((item, i) => (
            <div key={i} className="p-4">
              <div className="text-emerald-500 text-3xl mb-2">
                ★
              </div>
              <h4 className="font-semibold">{item}</h4>
              <p className="text-sm text-gray-500 mt-1">
                Find best opportunities easily
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= JOB LIST (🔥 FIXED) ================= */}
      <div className="bg-gradient-to-br from-[#020024] via-[#032b3b] to-[#021c2d] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10">
            Latest Job Openings
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                applied={appliedJobs.includes(job.id)}
                onApply={applyJob}
                matchPercent={
                  Math.floor(Math.random() * 40) + 60
                }
              />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No jobs found
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

import Footer from "../../components/Footer";
