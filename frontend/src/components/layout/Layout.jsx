import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        {/* Interactive Sidebar */}
        <div className="group fixed left-0 top-0 h-full w-20 hover:w-64 transition-all duration-300 bg-white shadow-xl border-r border-purple-100 flex flex-col py-6">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 ml-20 group-hover:ml-64 transition-all duration-300">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-gray-500 border-t border-purple-100">
        © {new Date().getFullYear()} WebDeveloper — Crafted with passion.
      </footer>
    </div>
  );
}
