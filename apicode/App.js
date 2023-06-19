import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "./Home";
import About from "./About";
import Layoutadmin from "./admin/LayoutAdmin";
import AdminHome from "./admin/AdminHome";
import AdminAbout from "./admin/AdminAbout";
import Restapipost from "./RestAPIPost";
import RestApiLogin from "./RestApiLogin";
import RestAPIGet from "./RestAPIGet";
import Logout from "./Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} /> 
        <Route path="home" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="register" element={<Restapipost />} />
        <Route path="login" element={<RestApiLogin />} />
        <Route path="dashboard" element={<RestAPIGet />} />
        <Route path="logout" element={<Logout />} />
       

        </Route>
        <Route path="/admin" element={<Layoutadmin />} >
        <Route index element={<AdminHome />} /> 
        <Route path="home" element={<AdminHome />} /> 
        <Route path="about" element={<AdminAbout />} />
       

        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
