import "./CompanyHome.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import { Button, Stack } from "@mui/material/";
import { Add, Edit } from "@mui/icons-material/";
import { Link } from "react-router-dom";

const CompanyHome = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <h1>Painel de Controle ⚙️</h1>
      <div className="services-container">
        {/* <h2>Painel de Controle ⚙️</h2> */}
        <div className="add-service-container">
          <h2>Adicionar Serviço</h2>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="contained" startIcon={<Add />}>
              Adicionar Novo
            </Button>
            <Button size="small" variant="contained" startIcon={<Edit />}>
              Editar/Remover
            </Button>
          </Stack>
        </div>
        <div className="add-offers-container">
          <h2>Adicionar Ofertas</h2>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="contained" startIcon={<Add />}>
              Adicionar Novo
            </Button>
            <Button size="small" variant="contained" startIcon={<Edit />}>
              Editar/Remover
            </Button>
          </Stack>
        </div>
        <div className="rating-container">
          <h2>Avaliações</h2>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="contained">
              Visualizar
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;
