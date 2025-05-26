// src/components/Sidebar.jsx

import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaVial, FaComments, FaCog } from "react-icons/fa";

const navLinks = [
  { icon: <FaTachometerAlt />, label: "Dashboard" },
  { icon: <FaHistory />, label: "History" },
  { icon: <FaCalendarAlt />, label: "Calendar" },
  { icon: <FaUserMd />, label: "Appointments" },
  { icon: <FaChartBar />, label: "Statistics" },
  { icon: <FaVial />, label: "Tests" },
  { icon: <FaComments />, label: "Chat" },
  { icon: <FaCog />, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-purple-50 shadow-lg h-screen px-4 py-6 hidden md:block ">
        <h1 ><span className="text-4xl font-bold text-[#04d9ff]">Health</span><span className="text-purple-800 text-4xl">care.</span></h1>
      <h2 className="text-lg font-bold text-gray-500 mb-6">General</h2>
      <nav className="flex flex-col gap-4 ">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-400 hover:text-blue-600 cursor-pointer transition"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-sm font-medium">{link.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
