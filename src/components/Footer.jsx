export default function Footer() {
  return (
    
    <footer className="bg-gradient-to-br from-[#021c2d] via-[#032b3b] to-[#021c2d] text-gray-300">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ================= BRAND ================= */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            JobPortal
          </h2>
          <p className="text-sm leading-relaxed">
            A small river named Duden flows by their place and supplies it with the
            necessary regelialia. It is a paradise country.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            {["🐦", "📘", "📸"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 cursor-pointer hover:bg-emerald-500 hover:text-black transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* ================= LATEST NEWS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Latest News
          </h3>

          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                📰
              </div>
              <div>
                <p className="text-sm hover:text-emerald-400 cursor-pointer transition">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Oct 18, 2025 • Admin
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Works", "Blog", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="hover:text-emerald-400 cursor-pointer transition"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Have a Questions?
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-emerald-400">📍</span>
              203 Fake St. Mountain View, San Francisco, USA
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400">📞</span>
              +2 392 3929 210
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400">✉️</span>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved | Built with ❤️ by JobPortal
      </div>
    </footer>
  );
}
