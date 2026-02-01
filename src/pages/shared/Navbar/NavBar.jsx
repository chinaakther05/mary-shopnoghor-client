import React, { useState, useEffect } from "react";
import Logo from "../../../components/logo/Logo";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  const navLinks = [
    { path: "/", label: "হোম", icon: "🏠" },
    { path: "/about", label: "আমাদের সম্পর্কে", icon: "📖" },
    { path: "/products", label: "পণ্য", icon: "🛒" },
    { path: "/contact", label: "যোগাযোগ", icon: "📞" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-green-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT: Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
           
          </div>

          {/* CENTER: Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      isActive
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-700 dark:hover:text-green-400"
                    }`
                  }
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* RIGHT: Theme, User, Mobile Menu */}
          <div className="flex items-center space-x-3">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <div className="flex items-center space-x-1">
                  <span className="text-lg">🌙</span>
                  <span className="text-xs hidden sm:inline">ডার্ক</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <span className="text-lg">☀️</span>
                  <span className="text-xs hidden sm:inline">লাইট</span>
                </div>
              )}
            </button>

            {/* User Profile */}
            {user ? (
              <div className="flex items-center space-x-3">
                {/* User Avatar with Dropdown */}
                <div className="relative group">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src={user.photoURL || "https://i.ibb.co/2kRZq0J/user.png"}
                      alt="User"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border-2 border-green-500 object-cover shadow-sm"
                    />
                    <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user.displayName || "ব্যবহারকারী"}
                    </span>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName || "ব্যবহারকারী"}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/dashboard"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                      >
                        📊 ড্যাশবোর্ড
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                      >
                        🛒 আমার অর্ডার
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors mt-2 border-t border-gray-100 dark:border-gray-700 pt-2"
                      >
                        🚪 লগ আউট
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-2"
              >
                <span>🔐</span>
                <span>লগইন</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-3 ${
                  isActive
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
                }`
              }
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
          
          {/* Mobile User Info */}
          {user && (
            <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL || "https://i.ibb.co/2kRZq0J/user.png"}
                  alt="User"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName || "ব্যবহারকারী"}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 rounded-md"
                >
                  📊 ড্যাশবোর্ড
                </Link>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 rounded-md"
                >
                  🛒 আমার অর্ডার
                </Link>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                >
                  🚪 লগ আউট
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Brand Tagline in Mobile */}
        <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 border-t border-green-100 dark:border-gray-700">
          <p className="text-center text-xs text-gray-600 dark:text-gray-400">
            🌿 পাহাড়ের প্রাকৃতিক স্বাদ, শহুরে জীবনে 🌿
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;