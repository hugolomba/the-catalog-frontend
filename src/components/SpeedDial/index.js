import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const actions = [
  { icon: <FavoriteIcon />, name: "Favoritar" },
  { icon: <SaveIcon />, name: "Alvar" },
  { icon: <ShareIcon />, name: "Compartilhar" },
];

export default function OpenIconSpeedDial() {
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "absolute",
        bottom: "-2rem",
        rigth: "5rem",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: "5rem", right: "-10rem" }}
        icon={<ChatBubbleIcon openIcon={<ChatBubbleIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
