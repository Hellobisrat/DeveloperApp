import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api", // your backend URL
  withCredentials: true, // allows cookies if you use them
});

// Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
