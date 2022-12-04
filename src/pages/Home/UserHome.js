import "./UserHome.css";
import SearchBar from "../../components/SearchBar/SearchBar";

import MainCard from "../../components/MainCard/MainCard";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const UserHome = () => {
  const { categories, user } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="top-page">
        <div className="welcome-container">
          <h1>
            {user
              ? `Bem vindo, ${user.name && user.name.split(" ")[0]}! 👋`
              : `Bem vindo! 👋`}{" "}
          </h1>
          <h4>
            Aqui você encontra várias opções de serviços disponíveis na sua
            região
          </h4>
        </div>

        <SearchBar />
      </div>

      <div className="services-container">
        {/* <h3>Categorias de serviços</h3> */}
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
        </div>
      </div>
    </div>
  );
};

export default UserHome;
