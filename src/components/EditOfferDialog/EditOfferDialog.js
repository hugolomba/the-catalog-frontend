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
import Alert from "@mui/material/Alert";

import CompanyApi from "../../api/company.api";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export default function FormDialog({
  openEditOffer,
  handleClickOpenEditOffer,
  handleCloseEditOffer,
  user,
}) {
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleCloseEditOffer();
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    console.log(e.target.value);

    try {
      await CompanyApi.removeOffer(e.target.value);
      setAlert(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(setAlert(false), 4000);
    }
  };

  return (
    <div>
      <Dialog open={openEditOffer} onClose={handleCloseEditOffer}>
        <DialogTitle>Edite suas ofertas cadastradas</DialogTitle>
        {alert && <Alert severity="success">Oferta excluída!</Alert>}
        <DialogContent sx={{ backgroundColor: "grey" }}>
          {user[0] &&
            user[0].offers.map((offer) => {
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
                      image={offer.offerImg}
                      alt="banner"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {offer.offerName}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        R$ {offer.offerPrice}
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
