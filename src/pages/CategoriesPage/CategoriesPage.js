import "./CategoriesPage.css";
import { useParams } from "react-router-dom";
import {
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

import { useContext } from "react";
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

  const foundCompanies = companies.filter((c) => c.category[0] === category);

  return (
    <div className="result-category-container">
      <div className="go-back-category-page" onClick={() => navigate(-1)}>
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
                <Link
                  key={company.username}
                  to={`/profile/${company.username}`}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={company.profileImg}
                        alt="compnay-card"
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
