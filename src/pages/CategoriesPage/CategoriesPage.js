import "./CategoriesPage.css";

import MainCard from "../../components/MainCard/MainCard";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { Paper, Stack, Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CategoriesPage = ({ companies }) => {
  const { category } = useParams();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const foundCompanies = companies.filter((c) => c.category[0] === category);

  console.log(foundCompanies);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="result-category-container">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label={companies[0].name} />

        {companies.map((c) => {
          c.category.map((cc) => {
            console.log(cc);
            return <Tab label="Teste" />;
          });
        })}
      </Tabs>

      <Box sx={{ width: "90%" }}>
        <Stack spacing={2}>
          {foundCompanies &&
            foundCompanies.map((company) => {
              return (
                // <Paper>
                <Item>
                  <h2>{company.name}</h2>
                  <h4>{company.category[0]}</h4>
                </Item>
                // </Paper>
              );
            })}
        </Stack>
      </Box>
    </div>
  );
};

export default CategoriesPage;
