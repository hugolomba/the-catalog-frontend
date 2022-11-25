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
import EditUserProfilePage from "./pages/EditUserProfilePage/EditUserProfilePage";
import EditCompanyPage from "./pages/EditCompanyPage/EditCompanyPage";
import Copyright from "./components/Copyright";

function App() {
  const [companies, setCompanies] = useState([]);

  // const categories = [];

  // useEffect(() => {
  //   axios
  //     .get("https://final-project-backend-production.up.railway.app/companies")
  //     .then((response) => setCompanies(response.data))

  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await axios(
  //       "https://final-project-backend-production.up.railway.app/companies"
  //     );
  //     setCompanies(data);
  //   };
  //   try {
  //     fetchData();
  //   } catch (error) {}
  // }, []);

  // console.log("before: ", categories);
  // const findCategories = (companies) => {
  //   // companies &&
  //   companies.map((company) => {
  //     // if (categories.includes(company.category[0]))
  //     categories.push(company.category[0]);
  //   });
  // };
  // findCategories(companies);
  // console.log("after: ", categories);

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
      {/* <Footer /> */}
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default App;
