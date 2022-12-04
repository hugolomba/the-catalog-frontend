/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard({ offer }) {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 3,
        flexDirection: "column",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ paddingTop: "1rem" }}
      >
        {offer && offer.offerName}
      </Typography>
      <CardMedia
        sx={{ objectFit: "scale-down" }}
        component="img"
        height="180"
        image={offer && offer.offerImg}
      />
      <CardContent sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">
          <strong>R$ {offer && offer.offerPrice}</strong>
        </Typography>
        <Typography variant="h7" color="text.secondary">
          Válido até: {offer && offer.expiration}
        </Typography>
      </CardContent>
    </Card>
  );
}
