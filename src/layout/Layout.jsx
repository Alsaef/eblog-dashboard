import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBlog, FaUsers, FaSignInAlt, FaEdit } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Layout = () => {

  const {user,logout}=useContext(AuthContext)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Mobile Button */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden m-2"
        >
          ☰
        </label>

        {/* Main Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 space-y-2">
          <h2 className="text-xl font-bold mb-4">📊 Dashboard</h2>
          <li>
            <Link to="/">
              <FaHome className="text-lg" /> Home
            </Link>
          </li>
          <li>
            <Link to="/blogs-manage">
              <FaBlog className="text-lg" /> Manage Blogs
            </Link>
          </li>
          <li>
            <Link to="/blog-post">
              <FaEdit className="text-lg" /> Create Blog
            </Link>
          </li>
          <li>
            <Link to="/users-manage">
              <FaUsers className="text-lg" /> Manage Users
            </Link>
          </li>
          <li>

            {
              user?<button onClick={logout} className="btn btn-error text-white"><FaSignInAlt className="text-lg" />  LogOut</button>: <Link to="/auth/login">
              <FaSignInAlt className="text-lg" /> Login
            </Link>
            }
           
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
