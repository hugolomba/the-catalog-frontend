import "./SearchBar.css";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "@mui/material/IconButton";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/category/${search}`);
  };

  return (
    <Paper
      component="form"
      elevation={1}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "90%",
      }}
    >
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
