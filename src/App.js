import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainHome from "./pages/Home/MainHome";
import UserSignUp from "./pages/SignUp/UserSignUp";
import UserLogin from "./pages/Login/UserLogin";
import CompanySignUp from "./pages/SignUp/CompanySignUp";
import CompanyLogin from "./pages/Login/CompanyLogin";

import { useState, useEffect } from "react";

import CompanyProfilePage from "./pages/CompanyPages/CompanyProfilePage/CompanyProfilePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import EditUserProfilePage from "./pages/EditUserProfilePage/EditUserProfilePage";
import EditCompanyPage from "./pages/EditCompanyPage/EditCompanyPage";
import Copyright from "./components/Copyright";

import Loading1 from "./components/Loading1";

function App() {
  const [companies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={isLoading ? <Loading1 /> : <MainHome />} />
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
