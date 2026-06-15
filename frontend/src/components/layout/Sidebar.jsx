import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  Bell,
  Search,
  Settings,
  HelpCircle,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [showSubmenu,setShowSubmenu]= useState(false)
  const menu = [
    {
      section: "General",
      items: [
        { name: "Search", icon: Search, path: "/search" },
        { name: "Due List", icon: FileText, path: "/due" },
        {
          name: "Notifications",
          icon: Bell,
          path: "/notifications",
          badge: 16,
        },
      ],
    },
    {
      section: "Main",
      items: [
        { name: "Dashboard", icon: Home, path: "/" },
        {
          name: "Sales Quotations",
          icon: FileText,
          submenu: [
            { name: "Item Catalog", path: "/catalog" },
            { name: "Vendor Requests", path: "/vendors" },
            { name: "Follow Ups", path: "/followups" },
          ],
        },
        { name: "Individuals", icon: Users, path: "/individuals" },
      ],
    },
    {
      section: "System",
      items: [
        { name: "Settings", icon: Settings, path: "/settings" },
        { name: "Help", icon: HelpCircle, path: "/help" },
      ],
    },
  ];


  return (
    <div className="
      fixed left-0 top-0 h-full w-64 mt-20
      bg-white border-r border-purple-100 shadow-md 
      flex flex-col
    ">
      
      {/* SCROLLABLE MENU */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {menu.map((group) => (
          <div key={group.section}>
            <p className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
              {group.section}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => (
                <div key={item.name}>
                  
                  <NavLink
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      `
                      flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-purple-100 text-purple-600"
                          : "text-gray-700 hover:bg-purple-50"
                      }
                    `
                    }
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>

                    {item.badge && (
                      <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition ${
                          showSubmenu ? "rotate-180" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setShowSubmenu(prev => !prev);
                        }}
                      />
                    )}
                  </NavLink>

                  {showSubmenu && item.submenu && (
                    <div className="ml-10 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className={({ isActive }) =>
                            `
                            block text-sm px-2 py-1 rounded-md
                            ${
                              isActive
                                ? "text-purple-600 font-semibold"
                                : "text-gray-500 hover:text-purple-500"
                            }
                          `
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FIXED PROFILE SECTION */}
      <div className="border-t border-purple-100 p-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-300"></div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Tomas Taddese</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
