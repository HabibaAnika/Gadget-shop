import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function UserDropdown() {
    const {user, Logout} = useAuth();
    const handleLogout = () => {
        Logout();
    }
  return (
    <div>
      <div className="dropdown dropdown-end dropdown-bottom">
        <div tabIndex={0} role="button" className="">
          <div className="avatar">
            <div className="w-8 h-8 mt-2 rounded-full">
              <img src={`${user?.photoURL || "/public/user.png"}`} />
            </div>
          </div>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
           <li>
             <NavLink to={"/dashboard"}>Dashboard</NavLink>
           </li>
           <li>
              <button onClick={handleLogout} className="btn btn-primary btn-outline btn-sm">Logout</button>
           </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
