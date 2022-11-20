import "./CompanyHome.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CompanyHome = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <h1>Pagina Inicial de Empresa</h1>
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

export default CompanyHome;
