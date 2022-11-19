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
import Menu from "../Menu/Menu";

import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav>
      <div className="side-menu">
        {/* {menuIsOpen ? <img src={closeIcon} /> : <img src={menuIcon} />} */}
        <img src={menuIcon} onClick={() => setMenuIsOpen(true)} />
      </div>
      {menuIsOpen ? <Menu setMenuIsOpen={setMenuIsOpen} /> : ""}
      {/* <Menu /> */}
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
