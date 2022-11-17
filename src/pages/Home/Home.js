import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";

const MainHome = () => {
  return (
    <div className="home-container">
      <div className="home-emp-buttons">
        <Button variant="outlined">Cadastro/Login de empresa</Button>
        {/* <Button variant="outlined">Login de empresa</Button> */}
      </div>

      <SearchBar />
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

export default MainHome;
