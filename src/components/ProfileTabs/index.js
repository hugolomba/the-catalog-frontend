import "./style.css";

import * as React from "react";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import { Paper, Stack, Box, Typography, Tab, Tabs } from "@mui/material/";
import { styled } from "@mui/material/styles";
import OfferCard from "../ClothesOfferCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ user }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          centered
        >
          <Tab label="Sobre" {...a11yProps(0)} />
          <Tab label="Serviços" {...a11yProps(2)} />
          <Tab label="Ofertas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel component="div" value={value} index={0}>
        <Stack value={value} index={0} direction="column" spacing={2}>
          {/* <Item>
            <h3>Categoria:</h3>
            {user && user.category[0]}
          </Item> */}
          <Item>{user && user.description}</Item>
          <Item>
            <h3>Telefone:</h3>
            {user && user.phone}
          </Item>
          <Item>
            <h3>Endereço:</h3>
            {user && user.addresses}
          </Item>
          <Item>
            <h3>Rede Social e Site:</h3>
          </Item>
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack value={value} index={0} direction="column" spacing={2}>
          {/* <Item>{user && user.description}</Item> */}
          {user &&
            user.offers.map((offer) => {
              return <OfferCard key={offer.name} offer={offer} />;
            })}
        </Stack>
      </TabPanel>
    </Box>
  );
}
