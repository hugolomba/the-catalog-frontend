import "./SearchBar.css";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/category/${search}`);
  };

  return (
    <Paper>
      <div id="divBusca">
        <input
          type="text"
          id="txtBusca"
          placeholder="Busque o que deseja..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="btnBusca" onClick={handleSubmit}>
          Buscar
        </button>
      </div>
    </Paper>
  );
};

export default SearchBar;
