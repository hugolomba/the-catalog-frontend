import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainHome from "./pages/Home/MainHome";
import UserSignUp from "./pages/SignUp/UserSignUp";
import UserLogin from "./pages/Login/UserLogin";
import CompanySignUp from "./pages/SignUp/CompanySignUp";
import CompanyLogin from "./pages/Login/CompanyLogin";

import { useState } from "react";

import CompanyProfilePage from "./pages/CompanyPages/CompanyProfilePage/CompanyProfilePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import EditUserProfilePage from "./pages/EditUserProfilePage/EditUserProfilePage";
import EditCompanyPage from "./pages/EditCompanyPage/EditCompanyPage";
import Copyright from "./components/Copyright";

function App() {
  const [companies] = useState([]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route
          path="/profile/:company"
          element={<CompanyProfilePage companies={companies} />}
        />
        <Route path="/category/:category" element={<CategoriesPage />} />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route path="/user/signin" element={<UserLogin />} />
        <Route path="/company/signup" element={<CompanySignUp />} />
        <Route path="/company/signin" element={<CompanyLogin />} />
        <Route path="/user/edit/" element={<EditUserProfilePage />} />
        <Route path="/company/edit/" element={<EditCompanyPage />} />
      </Routes>

      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default App;
