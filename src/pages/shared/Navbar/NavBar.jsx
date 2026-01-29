import React, { useState, useEffect } from "react";
import Logo from "../../../components/logo/Logo";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const [theme, setTheme] = useState("light");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const handleLogOut = () => logOut().catch(err => console.log(err));

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm px-4 transition-colors duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center space-x-2">
        <button onClick={toggleTheme} className="btn btn-sm btn-outline">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-sm btn-primary">Log Out</button>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
