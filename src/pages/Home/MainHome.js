import "./MainHome.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import UserHome from "./UserHome";
import CompanyHome from "./CompanyHome";
import CompanyProfilePage from "../CompanyPages/CompanyProfilePage/CompanyProfilePage";

const MainHome = () => {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);
  // const [typeOfUser, setTypeOfUser] = useState("user");
  // console.log("user in home: ", user);

  let typeOfUser = "user";

  if (user && user.type === "company") typeOfUser = "company";
  // console.log(
  //   "🚀 ~ file: MainHome.js ~ line 20 ~ MainHome ~ typeOfUser",
  //   typeOfUser
  // );

  // return <CompanyProfilePage user={user} />;
  return <>{typeOfUser === "company" ? <CompanyHome /> : <UserHome />}</>;
};

export default MainHome;
