import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Edit from "../pages/Edit";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
}
