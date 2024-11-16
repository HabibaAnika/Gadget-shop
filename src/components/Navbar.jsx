import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleLoginBtn = () => {
    navigate("/login")
  }
  
  const handleRegisterBtn = () => {
    navigate("/register")
  }
  
  return (
    <div>
      <div className="navbar bg-base-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </ul>
          </div>
          <a className="text-xl">Gadget Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </ul>
        </div>
        {user ? (
           <div className="navbar-end">
              <UserDropdown />
           </div>
        ) : (
          <div className="navbar-end gap-4">
            <button onClick={handleLoginBtn} className="btn btn-outline btn-primary">Login</button>
            <button onClick={handleRegisterBtn} className="btn btn-primary">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
