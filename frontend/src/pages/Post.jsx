import React, { useState } from "react";
import { User, Contact, Eye, EyeOff, Mail, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import developerService from "../services/developerService";

const Post = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    role: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await developerService.createDeveloper(formData);

      toast.success("Developer posted successfully");

      setFormData({
        name: "",
        lastName: "",
        role: "",
        password: "",
        email: "",
      });

      navigate("/");
    } catch (error) {
      toast.error("Error posting developer");
    }
  };

  return (
    <div className="w-full gap-2 flex flex-col justify-center items-center md:p-12 lg:p-24">
      <form
        autoComplete="off"
        className="rounded-lg bg-white/90 max-w-lg border border-purple-200 shadow-md md:p-6 lg:p-12 space-y-6"
        onSubmit={handleSubmit}
      >
        <p className="flex items-center justify-center font-semibold text-lg text-purple-700">
          Post your developer
        </p>

        <div className="flex gap-2 border border-purple-400 rounded-lg p-2">
          <User className="w-5 h-5 text-purple-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="first name"
            className="outline-none"
          />
        </div>

        <div className="flex gap-2 border border-purple-400 rounded-lg p-2">
          <Contact className="w-5 h-5 text-purple-400" />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="last name"
            className="outline-none"
          />
        </div>

        <div className="flex gap-2 border border-purple-400 rounded-lg p-2">
          <Mail className="w-5 h-5 text-purple-400" />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            autoComplete="off"
            className="outline-none"
          />
        </div>

        <div className="flex gap-2 border border-purple-400 rounded-lg p-2">
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <Eye className="w-5 h-5 text-purple-400" />
            ) : (
              <EyeOff className="w-5 h-5 text-purple-400" />
            )}
          </button>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            autoComplete="new-password"
            onChange={handleChange}
            placeholder="password"
            className="outline-none"
          />
        </div>

        <div className="flex gap-2 border border-purple-400 rounded-lg p-2">
          <Briefcase className="w-5 h-5 text-purple-400" />
          <select
            name="role"
            value={formData.role}
            className="outline-none text-purple-400"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="seniorDeveloper">Senior Developer</option>
            <option value="leadDeveloper">Lead Developer</option>
          </select>
        </div>

        <button
          className="w-full bg-purple-400 text-white rounded-lg p-4"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
