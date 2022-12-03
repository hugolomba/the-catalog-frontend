import "./CompanyHome.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import { Button, Stack } from "@mui/material/";
import { Add, Edit } from "@mui/icons-material/";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import AddOfferDialog from "../../components/AddOfferDialog/AddOfferDialog";
import AddServiceDialog from "../../components/AddServiceDialog/AddServiceDialog";
import EditServiceDialog from "../../components/EditServiceDialog/EditServiceDialog";
import EditOfferDialog from "../../components/EditOfferDialog/EditOfferDialog";

const CompanyHome = () => {
  const { user, companies } = useContext(AuthContext);

  console.log("user from context in company home: ", user);

  const filteredArr = companies.filter((company) => company._id === user._id);

  console.log("companies from context: ", companies);

  console.log("filtered: ", filteredArr);

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

  //edit

  const [openEditService, setOpenEditService] = useState(false);

  const handleClickOpenEditService = () => {
    setOpenEditService(true);
  };

  const handleCloseEditService = () => {
    setOpenEditService(false);
  };

  const [openEditOffer, setOpenEditOffer] = useState(false);

  const handleClickOpenEditOffer = () => {
    setOpenEditOffer(true);
  };

  const handleCloseEditOffer = () => {
    setOpenEditOffer(false);
  };

  return (
    <div className="home-container">
      <SearchBar />
      <div className="home-company-title">
        <h1>Painel de Controle ⚙️</h1>
        <h3>{user && user.name}</h3>
      </div>
      <div className="services-container">
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
            <Button
              size="small"
              variant="contained"
              startIcon={<Edit />}
              onClick={handleClickOpenEditService}
            >
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
            <Button
              size="small"
              variant="contained"
              startIcon={<Edit />}
              onClick={handleClickOpenEditOffer}
            >
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

      <EditServiceDialog
        openEditService={openEditService}
        handleClickOpenEditService={handleClickOpenEditService}
        handleCloseEditService={handleCloseEditService}
        user={filteredArr}
      />

      <EditOfferDialog
        openEditOffer={openEditOffer}
        handleClickOpenEditOffer={handleClickOpenEditOffer}
        handleCloseEditOffer={handleCloseEditOffer}
        user={filteredArr}
      />
    </div>
  );
};

export default CompanyHome;
