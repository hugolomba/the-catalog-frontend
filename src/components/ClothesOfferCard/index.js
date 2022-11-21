import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ offer }) {
  return (
    <Card sx={{ display: "flex", alignItems: "center" }}>
      <CardMedia component="img" height="120" image={offer && offer.offerImg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer && offer.offerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer && offer.offerPrice}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
