import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainHome from "./pages/Home/MainHome";
import UserSignUp from "./pages/SignUp/UserSignUp";
import UserLogin from "./pages/Login/UserLogin";
import CompanySignUp from "./pages/SignUp/CompanySignUp";
import CompanyLogin from "./pages/Login/CompanyLogin";
import axios from "axios";
import { useState, useEffect } from "react";

import CompanyProfilePage from "./pages/CompanyPages/CompanyProfilePage/CompanyProfilePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("https://final-project-backend-production.up.railway.app/companies")
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route
          path="/profile/:company"
          element={<CompanyProfilePage companies={companies} />}
        />
        <Route
          path="/category/:category"
          element={<CategoriesPage companies={companies} />}
        />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route path="/user/signin" element={<UserLogin />} />
        <Route path="/company/signup" element={<CompanySignUp />} />
        <Route path="/company/signin" element={<CompanyLogin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
