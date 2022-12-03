import { Typography } from "@mui/material/";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a
        target="_blank"
        rel="noreferrer"
        color="inherit"
        href="https://www.linkedin.com/in/hugolomba/"
      >
        Hugo Miranda Lomba
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
