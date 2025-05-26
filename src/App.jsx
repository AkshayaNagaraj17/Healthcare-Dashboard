import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex sm:flex-col md:flex-row ">
        <Dashboard />
        <Calender />
      </div>
    </div>
  );
}
export default App;
