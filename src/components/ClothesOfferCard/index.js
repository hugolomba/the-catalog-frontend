import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ offer }) {
  return (
    <Card
      elevation={0}
      sx={{ display: "flex", alignItems: "center", borderRadius: 3 }}
    >
      <CardMedia
        sx={{ objectFit: "scale-down" }}
        component="img"
        height="180"
        image={offer && offer.offerImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer && offer.offerName}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <strong>R$ {offer && offer.offerPrice}</strong>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Válido até: <br />
          {offer && offer.expiration}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
