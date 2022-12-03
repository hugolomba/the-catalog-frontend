import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ service }) {
  return (
    <Card
      elevation={0}
      sx={{ display: "flex", alignItems: "center", borderRadius: 3 }}
    >
      <CardMedia
        sx={{ objectFit: "scale-down" }}
        component="img"
        height="180"
        image={service && service.serviceImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service && service.serviceName}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <strong>R$ {service && service.servicePrice}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
