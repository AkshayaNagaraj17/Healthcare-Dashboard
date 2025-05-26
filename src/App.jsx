
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Calender from "./components/calender"
function App() {
 

  return (
    <>
    <div className="flex ">
      <Sidebar></Sidebar>
     <Dashboard></Dashboard>
     <Calender></Calender>
    </div>
     
    </>
  )
}

export default App
