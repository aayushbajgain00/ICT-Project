import React from "react";
import { FaHome, FaVideo, FaUpload, FaUsers, FaCog } from "react-icons/fa";
import { MdMeetingRoom, MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 text-2xl font-extrabold text-blue-600 tracking-wide border-b border-gray-200">
          Meetwise
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-2 text-gray-700">
          {[
            { icon: <FaHome />, label: "Home" },
            { icon: <MdMeetingRoom />, label: "Meetings" },
            { icon: <FaVideo />, label: "Meeting Status" },
            { icon: <FaUpload />, label: "Uploads" },
            { icon: <AiOutlineAppstore />, label: "AI Apps" },
            { icon: <MdOutlineAnalytics />, label: "Analytics" },
            { icon: <FaUsers />, label: "Team" },
            { icon: <FaCog />, label: "Settings" },
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t text-xs text-gray-500">
          © 2025 Meetwise
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Search + Button */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search by title or keyword..."
            className="w-1/2 rounded-lg border border-gray-300 py-2 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition">
            Capture
          </button>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <div className="w-full max-w-lg mb-6">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Video Demo"
              className="rounded-xl shadow-md"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Aboard, User! 🎉
          </h2>
          <p className="text-gray-600 max-w-md">
            Meetwise is ready to automate your meetings and streamline your
            workflows. Let’s get started with smarter collaboration today.
          </p>
        </div>
      </main>
    </div>
  );
}
