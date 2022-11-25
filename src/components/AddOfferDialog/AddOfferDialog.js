import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CompanyApi from "../../api/company.api";

import { useState } from "react";

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  const [offerName, setOfferName] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [expiration, setExpiration] = useState("");
  const [offerImg, setOfferImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await CompanyApi.addOffer({
        offerName,
        offerPrice,
        expiration,
        offerImg,
      });
      handleClose();
      console.log("oferta adicionada: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar oferta</DialogTitle>
        <DialogContent>
          <DialogContentText>Adicione sua promoção!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="offerName"
            label="Título da Oferta"
            type="name"
            fullWidth
            variant="standard"
            value={offerName}
            onChange={(e) => setOfferName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="offerPrice"
            label="Valor da Oferta"
            type="number"
            fullWidth
            variant="standard"
            value={offerPrice}
            onChange={(e) => setOfferPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiration"
            label="Expiração"
            type="date"
            fullWidth
            variant="standard"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="offerImg"
            label="Imagem da Oferta"
            type="file"
            fullWidth
            variant="standard"
            onChange={(e) => setOfferImg(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
