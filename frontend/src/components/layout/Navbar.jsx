import React, { useContext, useState } from "react";
import { Code, Settings, LogOut } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm w-full border-b border-gray-200 font-sans">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div
            className="relative w-10 h-10 flex items-center justify-center rounded-xl
            bg-purple-400 shadow-lg group-hover:shadow-purple-500/50
            group-hover:scale-105 transition-all duration-300"
          >
            <Code className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-extrabold text-purple-500 tracking-wide">
            Let'see Our Coders
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          <button
            className="p-2 text-gray-600 hover:text-purple-500 transition-colors duration-300
           hover:bg-purple-50 rounded-full"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Avatar + Dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="w-9 h-9 flex items-center justify-center rounded-full
              bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white
              font-semibold shadow-md cursor-pointer"
            >
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            {/* Online indicator */}
            <div
              className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full
              border-2 border-white animate-pulse"
            />

            {/* Dropdown Menu */}
            {openMenu && (
              <div
                className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg border border-gray-200 py-2 animate-fadeIn"
              >
                <p className="px-4 py-2 text-gray-700 font-medium border-b">
                  {user?.name || "User"}
                </p>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
