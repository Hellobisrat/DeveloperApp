import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // later: call backend API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Send Reset Link
        </button>

        <p className="text-sm text-center mt-4">
          <a href="/login" className="text-blue-600">Back to login</a>
        </p>
      </form>
    </div>
  );
}
