
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Calender from "./components/calender"
function App() {
 

   return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <Dashboard />
        <Calender />
      </div>
    </div>
  );
}

export default App
