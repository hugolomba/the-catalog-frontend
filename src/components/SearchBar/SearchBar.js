import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div id="divBusca">
      <input type="text" id="txtBusca" placeholder="Buscar..." />
      <button id="btnBusca">Buscar</button>
    </div>
  );
};

export default SearchBar;
