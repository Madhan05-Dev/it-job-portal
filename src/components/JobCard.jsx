export default function JobCard({ job, onApply, applied, matchPercent }) {
  return (
    <div className="relative group rounded-3xl bg-gradient-to-br from-[#020024] via-[#032b3b] to-[#021c2d] p-6 shadow-xl hover:scale-[1.02] transition-all duration-300">
      
      {/* Premium badge */}
      {/* <div className="absolute top-4 right-4 text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
        PREMIUM
      </div> */}

      <h3 className="text-xl font-bold text-white mb-1">
        {job.title}
      </h3>

      <p className="text-gray-400 text-sm mb-3">
        {job.company}
      </p>

      {/* Info */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
          📍 {job.location}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
          ⏳ {job.experience}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(job.skills || []).map((s, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Skill Match */}
      {matchPercent !== undefined && (
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-1">
            Skill Match
          </p>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <div
              className="h-2 rounded-full bg-emerald-500"
              style={{ width: `${matchPercent}%` }}
            />
          </div>
          <p className="text-xs text-emerald-400 mt-1">
            {matchPercent}% Match
          </p>
        </div>
      )}

      {/* Action */}
      <button
        disabled={applied}
        onClick={() => onApply(job)}
        className={`w-full py-2.5 rounded-full font-semibold transition ${
          applied
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : "bg-gradient-to-r from-emerald-400 to-green-500 text-black hover:shadow-lg"
        }`}
      >
        {applied ? "Applied" : "Apply Job"}
      </button>
    </div>
  );
}
