import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-12">
       <div className="col-span-3">
          <Sidebar></Sidebar>
       </div>
       <div className="col-span-9 p-12"><Outlet/></div>
    </div>
  )
}

export default Dashboard;
