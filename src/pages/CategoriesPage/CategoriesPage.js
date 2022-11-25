import "./CategoriesPage.css";

import MainCard from "../../components/MainCard/MainCard";

import { useParams } from "react-router-dom";
import {
  Paper,
  Stack,
  Box,
  Tab,
  Tabs,
  Avatar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext } from "react";
import { CardActionArea } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";

const CategoriesPage = () => {
  const { category } = useParams();
  const { companies } = useContext(AuthContext);
  console.log(">>>> companies", companies);
  console.log(">>>> category", category);
  const navigate = useNavigate();

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
      <div className="go-back-category-page" onClick={() => navigate(-1)}>
        {/* <ArrowBackIcon /> */}
        {/* <button onClick={() => navigate(-1)}>Voltar</button> */}
        {/* <span>Voltar</span> */}
        <Button
          variant="outlined"
          fullWidth="true"
          startIcon={<ArrowBackIcon />}
        >
          Voltar
        </Button>
      </div>

      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack spacing={2}>
          {foundCompanies &&
            foundCompanies.map((company) => {
              return (
                // <Item>
                //   <Avatar variant="square" src={company.profileImg} />
                //   <h2>{company.name}</h2>
                //   <h4>{company.category[0]}</h4>
                // </Item>
                <Link to={`/profile/${company.username}`}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={company.profileImg}
                        alt="green iguana"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {company.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {company.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            })}
        </Stack>
      </Box>
    </div>
  );
};

export default CategoriesPage;
