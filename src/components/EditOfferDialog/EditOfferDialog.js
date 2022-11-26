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
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceImg, setServiceImg] = useState("");

  const [alert, setAlert] = useState(false);

  const { updateCompany } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const data = await CompanyApi.addService({
    //     serviceName,
    //     servicePrice,
    //     serviceImg,
    //   });

    handleCloseEditOffer();
    //   console.log("oferta adicionada: ", data);
    // } catch (error) {
    //   console.log(error);
    // }
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
      const myTimeout = setTimeout(setAlert(false), 4000);
    }
  };

  return (
    <div>
      <Dialog open={openEditOffer} onClose={handleCloseEditOffer}>
        <DialogTitle>Edite suas ofertas cadastradas</DialogTitle>
        {alert && <Alert severity="success">Oferta excluída!</Alert>}
        <DialogContent
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //   }}
        >
          {user[0] &&
            user[0].offers.map((offer) => {
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
                      {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography> */}
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
          <Button onClick={handleCloseEditOffer}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
