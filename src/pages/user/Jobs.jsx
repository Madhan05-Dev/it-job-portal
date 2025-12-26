import { useState } from "react";
import UserNavbar from "../../components/UserNavbar";
import JobCard from "../../components/JobCard";
import { defaultJobs } from "../../data/jobs";

export default function Jobs() {
  const adminJobs =
    JSON.parse(localStorage.getItem("adminJobs")) || [];

  const jobs = [...defaultJobs, ...adminJobs];

  const [appliedJobs, setAppliedJobs] = useState(
    JSON.parse(localStorage.getItem("appliedJobs")) || []
  );

  const applyJob = (job) => {
    if (appliedJobs.includes(job.id)) return;

    const updated = [...appliedJobs, job.id];
    setAppliedJobs(updated);
    localStorage.setItem("appliedJobs", JSON.stringify(updated));
  };

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen bg-gradient-to-br from-[#020024] via-[#032b3b] to-[#021c2d] p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Latest Job Openings
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                applied={appliedJobs.includes(job.id)}
                onApply={applyJob}
                matchPercent={Math.floor(Math.random() * 40) + 60}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import Footer from "../../components/Footer";