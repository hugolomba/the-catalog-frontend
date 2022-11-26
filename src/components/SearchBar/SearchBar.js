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

// import React from "react";
// import { view } from "@risingstack/react-easy-state";
// import SearchBar from "material-ui-search-bar";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import appStore from "./appStore";
// import { Search } from "@mui/icons-material";

// // this is re-rendered whenever the relevant parts of the used data stores change
// const NavBar = () => (
//   <div className="searchbar">
//     <SearchBar
//       onRequestSearch={appStore.fetchBeers}
//       placeholder="Add some food ..."
//       autoFocus
//     />
//     {appStore.isLoading && <LinearProgress />}
//   </div>
// );

// export default SearchBar;
