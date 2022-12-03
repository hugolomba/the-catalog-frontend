import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AlertTitle, Alert, Typography } from "@mui/material/";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import signupLogo from "../../img/icons/signup.png";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import userApi from "../../api/user.api";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addresses, setAddresses] = useState("");

  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoading, isLoading } = useContext(AuthContext);

  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [errorAlertIsOpen, setErrorAlertIsOpen] = useState(false);
  let errorMessage = "";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await userApi.signup({
        name,
        username,
        email,
        phone,
        addresses,

        profileImg,
        password,
      });

      setIsLoading(true);
    } catch (error) {
      errorMessage = error.message;
      setErrorAlertIsOpen(true);
      setAlertIsOpen(true);
    } finally {
      setIsLoading(false);
      setErrorAlertIsOpen(false);

      setTimeout(() => navigate("/user/signin"), 5000);
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
          <p>Redirecionando para a página de login ...</p>
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
              Cadastro de Usuário
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
                    //   required
                    fullWidth
                    name="profileImg"
                    label="Foto de Perfil"
                    type="file"
                    id="profileImg"
                    autoComplete="new-profile-image"
                    onChange={(e) => setProfileImg(e.target.files[0])}
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
                disable={isLoading.toString()}
              >
                Cadastrar Usuário
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/user/signin">
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
