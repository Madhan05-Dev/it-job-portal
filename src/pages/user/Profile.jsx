import { useState } from "react";
import UserNavbar from "../../components/UserNavbar";

export default function Profile() {
  const stored =
    JSON.parse(localStorage.getItem("userProfile")) || {};

  const [profile, setProfile] = useState({
    name: stored.name || "",
    role: stored.role || "",
    about: stored.about || "",
    age: stored.age || "",
    experience: stored.experience || "",
    location: stored.location || "",
    email: stored.email || "",
    phone: stored.phone || "",
    education: stored.education || "",
    skills: stored.skills || [],
    resume: stored.resume || null,
    resumeName: stored.resumeName || "",
  });

  const [skillInput, setSkillInput] = useState("");

  /* ================= SAVE ================= */
  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile saved successfully ✅");
  };

  /* ================= ADD SKILL ================= */
  const addSkill = () => {
    if (!skillInput.trim()) return;
    setProfile({
      ...profile,
      skills: [...profile.skills, skillInput.trim()],
    });
    setSkillInput("");
  };

  /* ================= RESUME UPLOAD ================= */
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfile({
        ...profile,
        resume: reader.result,
        resumeName: file.name,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#f8fafc] to-[#ecfeff] p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-3 overflow-hidden">

          {/* ================= LEFT PROFILE CARD ================= */}
          <div className="p-6 border-r bg-white">
            <div className="flex flex-col items-center text-center">

              {/* DEFAULT AVATAR */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-md">
                {profile.name
                  ? profile.name.charAt(0).toUpperCase()
                  : "U"}
              </div>

              {/* NAME INPUT */}
              <input
                className="mt-4 text-center text-xl font-bold border-b outline-none"
                placeholder="Your Name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />

              {/* ROLE INPUT */}
              <input
                className="text-center text-emerald-600 text-sm font-medium border-b outline-none mt-1"
                placeholder="Your Role"
                value={profile.role}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
              />

              {/* ABOUT INPUT */}
              <textarea
                className="text-gray-500 text-sm mt-3 text-center border rounded p-2 w-full"
                rows="3"
                placeholder="Short profile summary"
                value={profile.about}
                onChange={(e) =>
                  setProfile({ ...profile, about: e.target.value })
                }
              />
            </div>

            {/* ================= SKILLS ================= */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Skills</h4>

              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-3">
                <input
                  className="border rounded px-2 py-1 w-full text-sm"
                  placeholder="Add skill"
                  value={skillInput}
                  onChange={(e) =>
                    setSkillInput(e.target.value)
                  }
                />
                <button
                  onClick={addSkill}
                  className="bg-emerald-600 text-white px-3 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* ================= RESUME ================= */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Resume</h4>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="text-sm"
              />

              {profile.resume && (
                <p className="text-green-600 text-sm mt-2">
                  ✔ {profile.resumeName}
                </p>
              )}
            </div>
          </div>

          {/* ================= RIGHT DETAILS ================= */}
          <div className="lg:col-span-2 p-6 space-y-6">

            {/* BASIC INFO */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-semibold mb-4">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <input
                  className="border p-2 rounded"
                  placeholder="Age"
                  value={profile.age}
                  onChange={(e) =>
                    setProfile({ ...profile, age: e.target.value })
                  }
                />
                <input
                  className="border p-2 rounded"
                  placeholder="Years of Experience"
                  value={profile.experience}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      experience: e.target.value,
                    })
                  }
                />
                <input
                  className="border p-2 rounded"
                  placeholder="Location"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      location: e.target.value,
                    })
                  }
                />
                <input
                  className="border p-2 rounded"
                  placeholder="Phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone: e.target.value,
                    })
                  }
                />
                <input
                  className="border p-2 rounded col-span-full"
                  placeholder="Email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* EDUCATION */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-semibold mb-3">
                Education
              </h3>
              <textarea
                className="border p-2 rounded w-full"
                rows="3"
                placeholder="Education details"
                value={profile.education}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    education: e.target.value,
                  })
                }
              />
            </div>

            {/* SAVE */}
            <div className="flex justify-end">
              <button
                onClick={saveProfile}
                className="px-8 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 font-semibold text-black hover:scale-105 transition"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
