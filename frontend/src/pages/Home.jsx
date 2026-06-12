import React, { useState, useEffect, useMemo } from "react";
import { Edit2, List, Trash2, MoreVertical,  Star, TrendingUpIcon } from "lucide-react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import developerService from "../services/developerService";
import DeveloperCardSkeleton from "../components/ui/DeveloperCardSkeleton";
import SidebarSkeleton from "../components/ui/SidebarSkeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [developers, setDevelopers] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchDevelopers = async () => {
    try {
      const data = await developerService.getDevelopers();
      setDevelopers(data || []);
    } catch (error) {
      toast.error("Error fetching developers");
    } finally {
      setLoading(false);
    }
  };

  fetchDevelopers();
}, []);


  const SeniorDevelopers = useMemo(() => {
    return developers.filter(
      (dev) =>
        typeof dev.role === "string" &&
        dev.role.toLowerCase().includes("senior")
    );
  }, [developers]);

  const LeadDevelopers = useMemo(() => {
    return developers.filter(
      (dev) =>
        typeof dev.role === "string" &&
        dev.role.toLowerCase().includes("lead")
    );
  }, [developers]);

  const Stat = useMemo(() => {
    const Total = developers.length;
    const Developer = developers.filter(
      (d) => d.role?.toLowerCase() === "developer"
    ).length;
    const Senior = developers.filter(
      (d) => d.role?.toLowerCase() === "seniordeveloper"
    ).length;
    const Lead = developers.filter(
      (d) => d.role?.toLowerCase() === "leaddeveloper"
    ).length;

    return { Total, Developer, Senior, Lead };
  }, [developers]);

  const handleDelete = async (id) => {
    try {
      await developerService.deleteDeveloper(id);
      toast.success("Deleted successfully");
      setDevelopers((prev) => prev.filter((dev) => dev._id !== id));
      navigate("/");
    } catch (error) {
      toast.error("Error while deleting");
    }
  };
    if (loading) {
  return (
    <div className="w-full h-screen ml-64 grid grid-cols-3 gap-3 overflow-y-auto">
      <div className="col-span-2 m-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
          {[1, 2, 3, 4].map((i) => (
            <DeveloperCardSkeleton key={i} />
          ))}
        </div>
      </div>

      <SidebarSkeleton />
    </div>
  );
}

  return (
  <div className="w-full h-screen ml-64 bg-gray-50 overflow-y-auto">

    {/* TOP BAR */}
    <div className="w-full flex items-center justify-between p-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-purple-600">Developers Dashboard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search developers..."
          className="border rounded-lg px-3 py-2 text-sm"
        />
        <div className="w-10 h-10 rounded-full bg-purple-300"></div>
      </div>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-6 gap-6 p-6">

      {/* LEFT MAIN CONTENT */}
      <div className="col-span-4 space-y-6">

        {/* Section Title */}
        <div className="flex items-center gap-3">
          <List className="w-6 h-6 text-purple-500" />
          <h2 className="text-xl font-bold text-purple-600">All Developers</h2>
        </div>

        {/* Developer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developers?.map((dev) => (
            <div
              key={dev._id}
              className="relative p-6 rounded-xl border border-purple-100 shadow-md bg-white transition hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-gray-900 font-semibold">{dev.name.toUpperCase()}</p>
              <p className="text-purple-500 text-sm">{dev.email.toLowerCase()}</p>
              <p className="text-purple-400 text-sm">{dev.role}</p>

              {/* Dropdown */}
              <button
                className="absolute top-3 right-3"
                onClick={() => setEditId(editId === dev._id ? null : dev._id)}
              >
                <MoreVertical className="w-5 h-5 text-purple-400" />
              </button>

              {editId === dev._id && (
                <div className="absolute top-10 right-3 w-40 rounded-lg p-4 border bg-white shadow-lg">
                  <Link to={`/edit/${dev._id}`} className="flex items-center gap-2">
                    <Edit2 className="w-4 h-4 text-purple-500" />
                    <span>Edit</span>
                  </Link>

                  <button
                    className="flex items-center gap-2 mt-2"
                    onClick={() => handleDelete(dev._id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="col-span-2 space-y-6">

        {/* Lead Developers */}
        <div className="rounded-xl border border-purple-100 shadow-md bg-white p-6">
          <h3 className="text-lg font-bold text-purple-600 mb-4">Lead Developers</h3>
          {LeadDevelopers.map((dev) => (
            <div key={dev._id} className="flex items-center gap-3 mb-2">
              <Star className="w-4 h-4 text-purple-500" />
              <p className="text-purple-400">{dev.name.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {/* Senior Developers */}
        <div className="rounded-xl border border-purple-100 shadow-md bg-white p-6">
          <h3 className="text-lg font-bold text-purple-600 mb-4">Senior Developers</h3>
          {SeniorDevelopers.map((dev) => (
            <div key={dev._id} className="flex items-center gap-3 mb-2">
              <Star className="w-4 h-4 text-purple-500" />
              <p className="text-purple-400">{dev.name.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-xl border border-purple-100 shadow-md bg-white p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUpIcon className="w-5 h-5 text-purple-500" />
            <p className="text-lg font-bold text-purple-600">Developer Stats</p>
          </div>

          <p className="text-sm text-purple-600">Developer: {Stat.Developer}</p>
          <p className="text-sm text-purple-600">Senior: {Stat.Senior}</p>
          <p className="text-sm text-purple-600">Lead: {Stat.Lead}</p>
          <p className="text-sm text-purple-600">Total: {Stat.Total}</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;
