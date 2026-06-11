import React from "react";
import { Home, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Home",
      icon: <Home className="w-5 h-5 text-purple-400" />,
      path: "/",
    },
    {
      name: "Post",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      path: "/post",
    },
  ];

  return (
    <div className="md:block fixed w-20 h-full lg:w-64 bg-white/90 border-r border-purple-100 backdrop-blur-sm shadow-sm z-20 transition-all duration-300">
      <div className="flex flex-col pt-10">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `m-6 p-6 max-w-[170px] w-full rounded-lg border-2 shadow-md mx-auto flex flex-col items-center gap-4 justify-center transition-all duration-300
              ${
                isActive
                  ? "border-purple-400 bg-purple-50 shadow-purple-200"
                  : "border-purple-200 hover:border-purple-300 hover:bg-purple-50"
              }`
            }
          >
            <div className="text-gray-600 text-sm">{item.name}</div>
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
