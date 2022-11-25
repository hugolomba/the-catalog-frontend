import "./CompanyHome.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";
import { Button, Stack } from "@mui/material/";
import { Add, Edit } from "@mui/icons-material/";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";

import AddOfferDialog from "../../components/AddOfferDialog/AddOfferDialog";
import AddServiceDialog from "../../components/AddServiceDialog/AddServiceDialog";

const CompanyHome = () => {
  const { categories, user } = useContext(AuthContext);

  const [openOffer, setOpenOffer] = useState(false);

  const handleClickOpenOffer = () => {
    setOpenOffer(true);
  };

  const handleCloseOffer = () => {
    setOpenOffer(false);
  };

  const [openService, setOpenService] = useState(false);

  const handleClickOpenService = () => {
    setOpenService(true);
  };

  const handleCloseService = () => {
    setOpenService(false);
  };

  return (
    <div className="home-container">
      <SearchBar />
      <div className="home-company-title">
        <h1>Painel de Controle ⚙️</h1>
        <h3>{user && user.name}</h3>
      </div>
      <div className="services-container">
        {/* <h2>Painel de Controle ⚙️</h2> */}
        <div className="add-service-container">
          <h2>Adicionar Serviço</h2>
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              variant="contained"
              startIcon={<Add />}
              onClick={handleClickOpenService}
            >
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
            <Button
              size="small"
              variant="contained"
              startIcon={<Add />}
              onClick={handleClickOpenOffer}
            >
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
      <AddOfferDialog
        open={openOffer}
        handleClickOpen={handleClickOpenOffer}
        handleClose={handleCloseOffer}
      />
      <AddServiceDialog
        openService={openService}
        handleClickOpenService={handleClickOpenService}
        handleCloseService={handleCloseService}
      />
    </div>
  );
};

export default CompanyHome;
