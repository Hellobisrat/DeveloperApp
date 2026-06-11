import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
    // later: call backend API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          <a href="/register" className="text-blue-600">Create an account</a>
        </p>

        <p className="text-sm text-center mt-2">
          <a href="/forgot-password" className="text-blue-600">Forgot password</a>
        </p>
      </form>
    </div>
  );
}
