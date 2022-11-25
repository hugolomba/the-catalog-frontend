import "./CompanyProfilePage.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Avatar from "@mui/material/Avatar";
import { Typography, Tab, Box } from "@mui/material/";
import ProfileTabs from "../../../components/ProfileTabs";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.context";

import SpeedDial from "../../../components/SpeedDial";

const ProfilePage = () => {
  const { company } = useParams();
  const { companies } = useContext(AuthContext);
  console.log("companie Param: ", company);

  const foundCompanie = companies.find((c) => c.username === company);

  return (
    <div className="profile-container">
      <SearchBar />

      <div className="profile-header">
        {/* <div className="cover-container">
          <h2>Capa da empresa ou to tipo de serviço</h2>
        </div> */}
        <div className="top-profile">
          <Avatar
            alt="user avatar"
            src={foundCompanie && foundCompanie.profileImg}
            sx={{ width: 100, height: 100 }}
          />
          <div>
            <h1>{foundCompanie && foundCompanie.name}</h1>
            <h2>⋆⋆⋆⋆⋆</h2>
          </div>
        </div>
      </div>
      <ProfileTabs user={foundCompanie} />
      <SpeedDial sx={{ position: "absolute" }} />
    </div>
  );
};

export default ProfilePage;
