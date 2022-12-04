import { Typography } from "@mui/material/";
import "./style.css";

function Copyright() {
  return (
    <p className="copyright" align="center">
      {"Copyright © "} {new Date().getFullYear()}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/hugolomba/"
      >
        {" "}
        Hugo Miranda
      </a>
    </p>
  );
}

export default Copyright;
