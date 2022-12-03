import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import CompanyApi from "../../api/company.api";

export default function FormDialog({
  openEditService,
  handleCloseEditService,
  user,
}) {
  console.log("user in editService: ", user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCloseEditService();

    try {
    } catch (error) {}
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    console.log(e.target.value);

    try {
      await CompanyApi.removeService(e.target.value);
    } catch (error) {}
  };

  return (
    <div>
      <Dialog open={openEditService} onClose={handleCloseEditService}>
        <DialogTitle>Edite seus serviços cadastrados</DialogTitle>
        <DialogContent sx={{ backgroundColor: "grey" }}>
          {user[0] &&
            user[0].services.map((offer) => {
              return (
                <Card
                  elevation={1}
                  sx={{
                    maxWidth: 345,
                    heigth: 90,
                    display: "flex",

                    flexDirection: "column",
                    gap: "0",
                    marginBottom: 2,
                    marginTop: 1,
                  }}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CardMedia
                      sx={{ objectFit: "scale-down" }}
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
                    </CardContent>
                  </CardActionArea>
                  <Button value={offer._id} onClick={handleDelete}>
                    Remover
                  </Button>
                </Card>
              );
            })}
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
