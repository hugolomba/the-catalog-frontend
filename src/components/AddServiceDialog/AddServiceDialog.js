import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CompanyApi from "../../api/company.api";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export default function FormDialog({
  openService,
  handleClickOpenService,
  handleCloseService,
}) {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceImg, setServiceImg] = useState("");

  const { updateCompany } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await CompanyApi.addService({
        serviceName,
        servicePrice,
        serviceImg,
      });
      updateCompany();
      handleCloseService();
      console.log("oferta adicionada: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={openService} onClose={handleCloseService}>
        <DialogTitle>Adicionar Serviço</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adicione os Serviços que você oferece!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="serviceName"
            label="Nome do Serviço"
            type="name"
            fullWidth
            variant="standard"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="servicePrice"
            label="Valor do Serviço"
            type="number"
            fullWidth
            variant="standard"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="serviceImg"
            label="Imagem da Oferta"
            type="file"
            fullWidth
            variant="standard"
            onChange={(e) => setServiceImg(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseService}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
