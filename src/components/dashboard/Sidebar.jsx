import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md">
          <NavLink className="flex items-center gap-2" to="/dashboard/overview">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md">
          <NavLink className="flex items-center gap-2" to="/">
          <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md">
          <NavLink className="flex items-center gap-2" to="/dashboard/overview">
          <IoLogOutOutline />
            <p>Logout</p>
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
