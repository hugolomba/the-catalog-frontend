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
        height="120"
        image={service && service.serviceImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service && service.serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service && service.servicePrice}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
