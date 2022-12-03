import "./CompanyProfilePage.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Avatar from "@mui/material/Avatar";

import ProfileTabs from "../../../components/ProfileTabs";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";

const ProfilePage = () => {
  const { company } = useParams();
  const { companies } = useContext(AuthContext);

  const foundCompanie = companies.find((c) => c.username === company);
  console.log("found company: ", foundCompanie);

  return (
    <div className="profile-container">
      <SearchBar />

      <div className="profile-header">
        <div className="top-profile">
          <Avatar
            alt="user avatar"
            src={foundCompanie && foundCompanie.profileImg}
            sx={{ width: 120, height: 120 }}
          />
          <div>
            <h1>{foundCompanie && foundCompanie.name}</h1>
          </div>
        </div>
      </div>
      <ProfileTabs company={foundCompanie} />
    </div>
  );
};

export default ProfilePage;
