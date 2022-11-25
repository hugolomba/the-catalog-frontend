import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import CompanyApi from "../../api/company.api";

import { useState } from "react";

export default function FormDialog({
  openEditService,
  handleClickOpenEditService,
  handleCloseEditService,
  user,
}) {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceImg, setServiceImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const data = await CompanyApi.addService({
    //     serviceName,
    //     servicePrice,
    //     serviceImg,
    //   });
    handleCloseEditService();
    //   console.log("oferta adicionada: ", data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <Dialog open={openEditService} onClose={handleCloseEditService}>
        <DialogTitle>Edite seus serviços cadastrados</DialogTitle>
        <DialogContent>
          {user[0] &&
            user[0].services.map((offer) => {
              return (
                <Card
                  elevation={5}
                  sx={{
                    maxWidth: 345,
                    heigth: 90,
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                    gap: "0",
                  }}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      sx={{ width: "40%" }}
                      component="img"
                      height="80"
                      image={offer.serviceImg}
                      alt="banner"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {offer.serviceName}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        R$ {offer.servicePrice}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  <Button>Remover</Button>
                </Card>
              );
            })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditService}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
