import UserNavbar from "../../components/UserNavbar";

export default function UserHome() {
  return (
    <>
      <UserNavbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Job Search"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <p className="text-sm mb-3 opacity-90">
              We have 850,000+ great job offers for you!
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Dream <br />
              <span className="text-blue-400">Job</span> is Waiting
            </h1>

            {/* SEARCH BAR */}
            <div className="bg-white rounded-xl p-4 mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                className="border p-3 rounded text-black"
                placeholder="Job title or keyword"
              />
              <input
                className="border p-3 rounded text-black"
                placeholder="Category"
              />
              <input
                className="border p-3 rounded text-black"
                placeholder="Location"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          <Feature
            title="Search Millions of Jobs"
            icon="🔍"
            desc="Explore verified IT jobs from top companies."
          />
          <Feature
            title="Easy To Manage Jobs"
            icon="🧩"
            desc="Track applied jobs and application status easily."
          />
          <Feature
            title="Top Careers"
            icon="🚀"
            desc="Find trending careers based on your skills."
          />
          <Feature
            title="Expert Candidates"
            icon="👨‍💻"
            desc="Get jobs that match your profile perfectly."
          />
        </div>
      </section>
    </>
  );
}

function Feature({ title, icon, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
    
  );
}
<Footer />
import Footer from "../../components/Footer";
