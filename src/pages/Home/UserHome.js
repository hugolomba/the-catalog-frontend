import "./UserHome.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="home-container">
      {/* <div className="home-emp-buttons">
            <Link to="/company/signin">
              <Button variant="outlined">Cadastro/Login de empresa</Button>
            </Link>
            <Link to="/user/signin">
              <Button variant="outlined">Cadastro/Login de usuário</Button>
            </Link>
            <Button variant="outlined">Login de empresa</Button>
          </div> */}

      <SearchBar />
      <h1>Página Inicial de Usuário</h1>
      <MainBanner />

      <div className="services-container">
        <h3>Categorias de serviços</h3>
        <div className="cards">
          <MainCard type={"Food"} />
          <MainCard type={"Pharmacy"} />
          <MainCard type={"Market"} />
          <MainCard type={"Events"} />
          <MainCard type={"Drinks"} />
          <MainCard type={"Service"} />
          <MainCard type={"Doméstico"} />
          <MainCard type={"Tecnologia"} />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
