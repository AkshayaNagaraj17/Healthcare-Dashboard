import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaUserMd,
  FaChartBar,
  FaVial,
  FaComments,
  FaCog,
} from "react-icons/fa";

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
    <aside className="w-64 bg-purple-50 shadow-lg h-screen px-6 py-8 hidden md:block">
    
      <h1 className="text-3xl font-bold mb-10">
        <span className="text-[#04d9ff]">Health</span>
        <span className="text-purple-800">care.</span>
      </h1>


      <h2 className="text-md font-semibold text-gray-500 mb-4 uppercase tracking-wide">General</h2>

     
      <nav className="flex flex-col gap-4">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-gray-600 hover:text-purple-800 hover:bg-purple-100 px-4 py-2 rounded-lg cursor-pointer transition duration-200 ease-in-out"
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
