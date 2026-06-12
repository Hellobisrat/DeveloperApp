import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button";

import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.register(form.name, form.email, form.password);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE — FORM */}
      <div className="flex flex-1 justify-center items-center bg-gray-50">
        <Card className="w-[420px] p-8 rounded-2xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-purple-700">
              Create Account
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="pl-10"
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="pl-10"
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="pl-10"
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Register
              </Button>
            </form>
          </CardContent>

          <CardFooter className="text-center text-sm">
            <a href="/login" className="text-purple-600 hover:underline">
              Already have an account?
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* RIGHT SIDE — BRANDING */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-slate-900/40 via-purple-600 to-purple-600/20 text-white flex-col justify-center px-16 rounded-l-[120px] shadow-xl relative overflow-hidden">

        {/* Decorative glowing blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-10"></div>

        <h1 className="text-4xl font-bold mb-4">Join WebDeveloper</h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Create your account and start building beautiful, organized, and
          powerful dashboards with ease.
        </p>

        <p className="mt-6 text-gray-400">
          More than 17k developers trust our platform.
        </p>

        <div className="mt-10 bg-purple-700/40 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-2">
            Start your journey today
          </h2>
          <p className="text-gray-300">
            Build, design, and launch your next project with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
