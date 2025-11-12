
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {Routes,Route,Outlet} from 'react-router-dom'
import Post from "./pages/Post";
import Edit from "./pages/Edit";
const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <div className="flex ">
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
  }
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );

}

export default App;
