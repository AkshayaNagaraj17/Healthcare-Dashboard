import avtar from "../assets/avtar.jpeg";

function Calender() {
  return (
    <>
      <div className="bg-purple-50 rounded-lg p-5">

        <div className="flex justify-end mt-10 space-x-5 items-center">
          <img src={avtar} alt="avatar" className="w-16 h-16 rounded-lg" />
          <div className="bg-purple-900 text-white flex justify-center items-center w-12 h-12 text-2xl rounded-lg">
            +
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5">
          <div className="bg-purple-900 p-6 rounded-xl text-white w-full md:w-1/2">
            <h1 className="font-bold mb-2 text-lg">Dentist</h1>
            <p>09.00 - 11.00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-xl text-purple-900 w-full md:w-1/2">
            <h1 className="font-bold mb-2 text-lg">Physiotherapy Appointment</h1>
            <p>09.00 - 11.00</p>
            <p>Dr. Kevin Djones</p>
          </div>
        </div>

       
        <div className="mt-20">
          <h1 className="font-bold text-3xl text-purple-900 mb-2">The Upcoming Schedule</h1>
          <h2 className="text-gray-400 mb-5">On Thursday</h2>
          <div className="flex flex-col md:flex-row gap-5 mb-10">
            <div className="bg-purple-100 p-6 rounded-xl text-purple-900 flex-1">
              <h1 className="font-bold mb-2 text-lg">Health Checkup Complete</h1>
              <p>11.00</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl text-purple-900 flex-1">
              <h1 className="font-bold mb-2 text-lg">Ophthalmologist</h1>
              <p>09.00 - 11.00</p>
            </div>
          </div>

          <h2 className="text-gray-400 mb-5">On Thursday</h2>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-purple-100 p-6 rounded-xl text-purple-900 flex-1">
              <h1 className="font-bold mb-2 text-lg">Cardiologist</h1>
              <p>11.00</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl text-purple-900 flex-1">
              <h1 className="font-bold mb-2 text-lg">Neurologist</h1>
              <p>09.00 - 11.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
