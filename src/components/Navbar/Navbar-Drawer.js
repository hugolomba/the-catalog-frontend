import react from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import closeIcon from "../../img/icons/close.png";
import menuIcon from "../../img/icons/menu.png";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import DrawerComponent from "../Drawer/DrawerComponent";
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material/";

// import makeStyles from "@mui/styles/";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav>
      {/* <div className="side-menu">
        {menuIsOpen ? <img src={closeIcon} /> : <img src={menuIcon} />}
      </div> */}
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <div className="navlinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="/faq" className="link">
            FAQ
          </Link>
        </div>
      )}
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <div className="avatar">
        {/* <FaUserCircle /> */}
        <Avatar alt="Remy Sharp" src={profile} sx={{ width: 45, height: 45 }} />
      </div>
    </nav>
  );
};

export default Navbar;
