import React from "react";
import { Home, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "Post",
      icon: FileText,
      path: "/post",
    },
  ];

  return (
    <div className="
      group fixed left-0 top-0 h-full 
      w-40 hover:w-64 
      bg-white/90 backdrop-blur-md 
      border-r border-purple-100 shadow-lg 
      transition-all duration-300 z-20
      flex flex-col py-40
    ">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              relative flex items-center gap-4 
              px-4 py-3 mx-3 my-2 rounded-lg 
              transition-all duration-300 cursor-pointer

              ${isActive 
                ? "bg-purple-100 text-purple-600 shadow-md" 
                : "text-gray-600 hover:bg-purple-50 hover:text-purple-500"}
              `
            }
          >
            {/* Active indicator bar */}
            <div
              className={({ isActive }) =>
                isActive
                  ? "absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-r-lg"
                  : ""
              }
            />

            {/* Icon */}
            <Icon className="w-6 h-6 text-purple-500" />

            {/* Label (hidden until hover) */}
            <span
              className="
                text-sm font-medium 
                opacity-0 group-hover:opacity-100 
                transition-all duration-300
              "
            >
              {item.name}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
