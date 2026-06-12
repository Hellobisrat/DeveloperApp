import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card"
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {toast} from 'react-toastify'
import { Mail, Lock } from "lucide-react";

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
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card className="w-[380px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10"
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

        
      
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm text-center">
    
          <a href="/register" className="text-blue-600">Create an account</a>
  
          <a href="/forgot-password" className="text-blue-600">Forgot password</a>
        </CardFooter>
      </Card>
    </div>
  );
}
