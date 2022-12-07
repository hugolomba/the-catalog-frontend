import "./CompanySignUpForm.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import { AlertTitle, Alert, Typography } from "@mui/material/";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import signupLogo from "../../img/icons/signup.png";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import CompanyAuthApi from "../../api/company.api";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addresses, setAddresses] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");

  const [description, setDescription] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const { setIsLoading, isLoading } = useContext(AuthContext);
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [errorAlertIsOpen, setErrorAlertIsOpen] = useState(false);
  let errorMessage = "";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await CompanyAuthApi.signup({
        name,
        username,
        email,
        phone,
        addresses,
        category,
        subcategory,
        profileImg,
        coverImg,
        password,
        description,
        instagram,
      });
      setErrorAlertIsOpen(false);
      setIsLoading(false);

      setAlertIsOpen(true);
      setTimeout(() => navigate("/company/signin"), 3000);
    } catch (error) {
      errorMessage = error.message;
      setErrorAlertIsOpen(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {errorAlertIsOpen && (
        <Alert severity="error">
          <AlertTitle>Error no Cadastro!</AlertTitle>
          {`O cadastro de`} <strong>{name}</strong> {`não foi realizado!`}
          <p>{errorMessage}</p>
        </Alert>
      )}

      {alertIsOpen ? (
        <Alert severity="success">
          <AlertTitle>Cadastro Realizado!</AlertTitle>
          {`O cadastro de`} <strong>{name}</strong> {`foi cadastrado!`}
          <p>Redirecionando para a página de login de empresa ...</p>
        </Alert>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, width: 50, height: 50 }}
              src={signupLogo}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Cadastro de Empresa
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Nome Completo"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Nome de Usuário"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Telefone"
                    name="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    helperText="apenas o @"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="whatsapp"
                    label="Whatsapp"
                    name="whatsapp"
                    helperText="+55(XX)XXXXXXXXX"
                    autoComplete="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="addresses"
                    label="Endereço"
                    name="addresses"
                    autoComplete="addresses"
                    value={addresses}
                    onChange={(e) => setAddresses(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    id="category"
                    label="Categoria"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem selected value="Restaurante">
                      Restaurante
                    </MenuItem>
                    <MenuItem value="Farmácia">Farmácia</MenuItem>
                    <MenuItem value="Mercado">Mercado</MenuItem>
                    <MenuItem value="Eventos">Eventos</MenuItem>
                    <MenuItem value="Bebidas">Bebidas</MenuItem>
                    <MenuItem value="Serviços">Serviços</MenuItem>
                    <MenuItem value="Const. Civil">Const. Civil</MenuItem>
                    <MenuItem value="Serv. Domésticos">
                      Serv. Domésticos
                    </MenuItem>
                    <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                    <MenuItem value="Moda">Moda</MenuItem>
                    <MenuItem value="Outros">Outros</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    //   required
                    fullWidth
                    name="profile-image"
                    label="Foto de Perfil"
                    type="file"
                    id="profile-image"
                    autoComplete="new-profile-image"
                    onChange={(e) => setProfileImg(e.target.files[0])}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="description"
                    label="Descrição"
                    multiline
                    rows={5}
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                Cadastrar Empresa
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/company/signin">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </ThemeProvider>
  );
}
