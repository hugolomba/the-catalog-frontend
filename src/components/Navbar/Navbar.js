import logo4 from "../../img/logo4.png";
import "./Navbar.css";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import menuIcon2 from "../../img/icons/menu2.png";

import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

import Avatar from "@mui/material/Avatar";

// context login
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const Navbar = () => {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext); // <== ADD

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav>
      <div className="side-menu">
        {/* <img src={menuIcon2} onClick={() => setMenuIsOpen(true)} /> */}
        <MenuIcon onClick={() => setMenuIsOpen(true)} />
        <Link to="/">
          <img className="logo" src={logo4} />
        </Link>
      </div>

      {menuIsOpen ? <Menu setMenuIsOpen={setMenuIsOpen} /> : ""}

      <div className="avatar">
        {isLoggedIn ? (
          <Avatar
            alt=""
            src={user.profileImg}
            sx={{ width: 55, height: 55 }}
            onClick={() => setMenuIsOpen(true)}
          />
        ) : (
          <Avatar
            alt=""
            sx={{ width: 45, height: 45 }}
            onClick={() => setMenuIsOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
