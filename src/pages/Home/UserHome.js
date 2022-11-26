import "./UserHome.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// import { styled, alpha } from "@mui/material/styles";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

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

      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search> */}

      <h1>
        {user
          ? `Bem vindo, ${user.name && user.name.split(" ")[0]}! 👋`
          : `Bem vindo! 👋`}{" "}
      </h1>
      <h4>
        Aqui você encontra várias opções de serviços disponíveis na sua região
      </h4>
      {/* <MainBanner /> */}

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
