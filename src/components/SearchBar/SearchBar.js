import "./SearchBar.css";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/category/${search}`);
  };

  return (
    // <Paper>
    //   <div id="divBusca">
    //     <input
    //       type="text"
    //       id="txtBusca"
    //       placeholder="Busque o que deseja..."
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //     />
    //     <button id="btnBusca" onClick={handleSubmit}>
    //       Buscar
    //     </button>
    //   </div>
    // </Paper>
    <Paper
      component="form"
      elevation={1}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Encontre um serviço"
        inputProps={{ "aria-label": "Encontre um serviço" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
