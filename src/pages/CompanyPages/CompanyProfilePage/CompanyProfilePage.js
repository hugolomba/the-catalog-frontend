import "./CompanyProfilePage.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Avatar from "@mui/material/Avatar";
import { Typography, Tab, Box } from "@mui/material/";
import ProfileTabs from "../../../components/ProfileTabs";
import { useParams } from "react-router-dom";

const ProfilePage = ({ companies }) => {
  const { company } = useParams();
  console.log("companie Param: ", company);

  const user = companies.find((c) => c.username === company);

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
            src={user && user.profileImg}
            sx={{ width: 100, height: 100 }}
          />
          <div>
            <h1>{user && user.name}</h1>
            <h2>⋆⋆⋆⋆⋆</h2>
          </div>
        </div>
      </div>
      <ProfileTabs user={user} />
    </div>
  );
};

export default ProfilePage;
