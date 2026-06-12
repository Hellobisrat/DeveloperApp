import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card"
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {toast} from 'react-toastify'
import { Mail, Lock, Github, Facebook, Chrome } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await authService.login(form.email, form.password);

      // Save user + token
      login(data.user);
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side -form */}
      <div className="flex flex-1 justify-center items-center bg-gray-50 ">
        <Card className="w-[420px] p-8 rounded-2xl shadow-2xl
 flex flex-col  justify-center ">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Login
            </Button>
          </form>
          <div className="flex items-center gap-3 mt-6">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="text-gray-500 text-sm">or continue with</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            

            <div className="flex justify-center gap-4 mt-4">
              <Chrome className="h-6 w-6 text-blue-600 cursor-pointer" />
              <Github className="h-6 w-6 text-purple-600 cursor-pointer" />
              <Facebook className="h-6 w-6 text-green-600 cursor-pointer" />
            </div>
        
      
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm text-center">
    
          <a href="/register" className="text-blue-600">Create an account</a>
  
          <a href="/forgot-password" className="text-red-600">Forgot password</a>
          
        </CardFooter>
      </Card>
      </div>
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
 text-white flex-col justify-center m-10 px-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to WebDeveloper</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          This page helps developers build organized and well‑coded dashboards full
          of beautiful and rich modules. 
        </p>

        <p className="mt-6 text-gray-400">
          More than 17k people joined us — it’s your turn.
        </p>

        <div className="mt-10 bg-gray-700 px-16  py-2 rounded-l-[120px] shadow-xl">
          <h2 className="text-xl font-semibold mb-2">
            Get your right job and right place
          </h2>
          <p className="text-gray-400">
            Be among the first founders to experience the easiest way to start
            and run a business.
          </p>
        </div>
      </div>
      
    </div>
  );
}
