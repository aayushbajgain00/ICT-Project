import React from "react";
import { FaHome, FaVideo, FaUpload, FaUsers, FaCog } from "react-icons/fa";
import { MdMeetingRoom, MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import "./homepage.css";

export default function HomePage() {
  const navItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <MdMeetingRoom />, label: "Meetings" },
    { icon: <FaVideo />, label: "Meeting Status" },
    { icon: <FaUpload />, label: "Uploads" },
    { icon: <AiOutlineAppstore />, label: "AI Apps" },
    { icon: <MdOutlineAnalytics />, label: "Analytics" },
    { icon: <FaUsers />, label: "Team" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className="homepage">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">Meetwise</div>

        {/* Nav */}
        <nav className="sidebar-nav" aria-label="Primary">
          {navItems.map((item, idx) => (
            <a key={idx} href="#" className="sidebar-link">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">© 2025 Meetwise</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Search + Button */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title or keyword..."
            aria-label="Search by title or keyword"
          />
          <button type="button">Capture</button>
        </div>

        {/* Welcome Card */}
        <section className="welcome-card" aria-labelledby="welcome-title">
          <div className="media">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Meetwise demo placeholder"
            />
          </div>
          <h2 id="welcome-title">Welcome Aboard, User! 🎉</h2>
          <p>
            Meetwise is ready to automate your meetings and streamline your
            workflows. Let’s get started with smarter collaboration today.
          </p>
        </section>
      </main>
    </div>
  );
}
