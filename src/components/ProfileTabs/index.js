import "./style.css";

import * as React from "react";
import PropTypes from "prop-types";

import {
  Paper,
  Stack,
  Box,
  Typography,
  Tab,
  Tabs,
  Divider,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import OfferCard from "../ClothesOfferCard";
import ServiceCard from "../ServiceCard/ServiceCard";

import { Instagram, WhatsApp } from "@mui/icons-material/";

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

export default function BasicTabs({ company }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(">>>> company", company);
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
        <Stack
          value={value}
          index={0}
          direction="column"
          spacing={2}
          sx={{ width: "100%", backgroundColor: "white", padding: 0 }}
        >
          <Item elevation={0} sx={{ borderRadius: 5, padding: "2rem" }}>
            {company && company.description}
          </Item>
          <Divider />
          <a Divideref={`tel:${company.phone}`}>
            <Item elevation={0} sx={{ borderRadius: 5 }}>
              <h3>Telefone:</h3>
              {company && company.phone}
            </Item>
          </a>
          <Divider />
          <Item elevation={0} sx={{ borderRadius: 5 }}>
            <h3>Endereço:</h3>
            {company && company.addresses}
          </Item>
          <Divider />
          <Item elevation={0} sx={{ borderRadius: 5 }}>
            <h3>Redes Sociais:</h3>
            <div className="profile-social-icons-container">
              <a
                target="_blank"
                Divideref={`https://www.instagram.com/${company.instagram}`}
              >
                <div className="profile-social-icons">
                  <span>
                    <Instagram />
                  </span>
                  @{company.instagram}
                </div>
              </a>
              <a
                target="_blank"
                Divideref={`https://api.whatsapp.com/send?phone=${company.whatsapp}`}
              >
                <div className="profile-social-icons">
                  <span>
                    <WhatsApp />
                  </span>
                  {company.whatsapp}
                </div>
              </a>
            </div>
          </Item>
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Stack value={value} index={0} direction="column" spacing={2}>
          {company &&
            company.services.map((service) => {
              return <ServiceCard key={service.name} service={service} />;
            })}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack value={value} index={0} direction="column" spacing={2}>
          {company &&
            company.offers.map((offer) => {
              return <OfferCard key={offer.name} offer={offer} />;
            })}
        </Stack>
      </TabPanel>
    </Box>
  );
}
