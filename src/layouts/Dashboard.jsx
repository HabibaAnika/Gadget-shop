import { Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div>
       <h2>Dashboard</h2>
       <div></div>
       <div><Outlet/></div>
    </div>
  )
}

export default Dashboard
