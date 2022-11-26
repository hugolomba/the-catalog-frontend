import "./UserHome.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const UserHome = () => {
  const { categories, user } = useContext(AuthContext);

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
      <h1>
        {user
          ? `Bem vindo, ${user.name && user.name.split(" ")[0]}! 👋`
          : `Bem vindo! 👋`}{" "}
      </h1>
      <MainBanner />

      <div className="services-container">
        <h3>Categorias de serviços</h3>
        <div className="cards">
          {categories.map((category) => {
            return (
              <Link
                key={categories.indexOf(category)}
                to={`/category/${category}`}
              >
                <MainCard type={category} />
              </Link>
            );
          })}
          {/* <Link to="/companies/category/Test1">
            <MainCard type={"Restaurante"} />
          </Link>
          <MainCard type={"Moda"} />
          <MainCard type={"Farmácia"} />

          <MainCard type={"Mercado"} />
          <MainCard type={"Eventos"} />
          <MainCard type={"Bebidas"} />
          <MainCard type={"Serviços"} />
          <MainCard type={"Serv. Domésticos"} />
          <MainCard type={"Tecnologia"} /> */}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
