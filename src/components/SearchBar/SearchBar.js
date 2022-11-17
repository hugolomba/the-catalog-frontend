import "./SearchBar.css";
import Paper from "@mui/material/Paper";

const SearchBar = () => {
  return (
    <Paper>
      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Busque o que deseja..." />
        <button id="btnBusca">Buscar</button>
      </div>
    </Paper>
  );
};

export default SearchBar;
