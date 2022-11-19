import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserSignUp from "./pages/SignUp/UserSignUp";
import UserLogin from "./pages/Login/UserLogin";
import CompanySignUp from "./pages/SignUp/CompanySignUp";
import CompanyLogin from "./pages/Login/CompanyLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
