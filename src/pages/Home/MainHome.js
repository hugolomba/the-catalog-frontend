import "./MainHome.css";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import UserHome from "./UserHome";
import CompanyHome from "./CompanyHome";

const MainHome = () => {
  const { user } = useContext(AuthContext);

  let typeOfUser = "user";

  if (user && user.type === "company") typeOfUser = "company";
  return <>{typeOfUser === "company" ? <CompanyHome /> : <UserHome />}</>;
};

export default MainHome;
