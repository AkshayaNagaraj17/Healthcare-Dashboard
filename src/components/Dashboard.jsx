import { FaBell } from "react-icons/fa";
import anatomy from "../assets/anatomy.png";
import lung from "../assets/lung.png";
import teeth from "../assets/teeth.png";
import bone from "../assets/bone.png";

function Dashboard() {
  const activity = [
    { day: "Mon", count: 1 },
    { day: "Tues", count: 3 },
    { day: "Wed", count: 2 },
    { day: "Thurs", count: 4 },
    { day: "Fri", count: 0 },
  ];

  return (
    <div className="bg-white shadow-lg h-full px-6 py-6 w-full">

      <div className="w-full max-w-xl h-12 flex items-center border border-gray-300 rounded-lg px-4 mb-8">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent text-gray-700"
        />
        <FaBell className="text-gray-600 text-xl cursor-pointer ml-3" />
      </div>


      <div className="flex justify-between items-center mb-6">
        <h1 className="text-purple-800 font-bold text-4xl">Dashboard</h1>
        <h2 className="text-purple-800 text-lg">This week</h2>
      </div>


      <div className="flex flex-wrap gap-6 mx-auto">
        <div className="bg-purple-50 rounded-xl p-4">
          <img src={anatomy} alt="Anatomy" className="h-[420px] object-contain" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-purple-50 rounded-xl p-4 flex items-center gap-4 w-80">
            <img src={lung} alt="Lung" className="w-16 h-16" />
            <div>
              <h3 className="text-purple-800 font-bold text-xl">Lungs</h3>
              <p className="text-gray-500 text-sm">Date: 26 Oct 2021</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 flex items-center gap-4 w-80">
            <img src={teeth} alt="Teeth" className="w-16 h-16" />
            <div>
              <h3 className="text-purple-800 font-bold text-xl">Teeth</h3>
              <p className="text-gray-500 text-sm">Date: 26 Oct 2021</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 flex items-center gap-4 w-80">
            <img src={bone} alt="Bone" className="w-16 h-16" />
            <div>
              <h3 className="text-purple-800 font-bold text-xl">Bone</h3>
              <p className="text-gray-500 text-sm">Date: 26 Oct 2021</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col mt-10 p-5 bg-purple-50 rounded-lg sm:w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-purple-800 text-3xl font-bold">Activity</h1>
          <p className="text-gray-400 text-sm">3 appointments</p>
        </div>
        <div className="flex items-end gap-4 h-40 justify-center">
          {activity.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-4 rounded-full bg-purple-800"
                style={{ height: `${item.count * 20}px` }}
              ></div>
              <span className="text-sm text-gray-600 mt-2">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
