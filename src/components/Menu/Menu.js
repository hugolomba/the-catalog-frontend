import "./Menu.css";
import closeIcon from "../../img/icons/close.png";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Menu = ({ setMenuIsOpen }) => {
  return (
    <div className="menu-container">
      <img src={closeIcon} onClick={() => setMenuIsOpen(false)} />

      <div className="login-menu-container">
        <div className="superior">
          <div className="avatar-menu-login">
            <Avatar alt="Remy Sharp" sx={{ width: 45, height: 45 }} />
            <span>entre ou cadastre-se :)</span>
          </div>
          <div className="login-buttons-container">
            <Link to="/user/signin">
              <Button variant="contained" onClick={() => setMenuIsOpen(false)}>
                entrar
              </Button>
            </Link>
            <Link to="/user/signup">
              <Button variant="outlined" onClick={() => setMenuIsOpen(false)}>
                cadastrar
              </Button>
            </Link>
          </div>
        </div>

        <div className="button-company">
          <Link to="/company/signin">
            <Button variant="outlined" onClick={() => setMenuIsOpen(false)}>
              Cadastro/Login de empresa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
