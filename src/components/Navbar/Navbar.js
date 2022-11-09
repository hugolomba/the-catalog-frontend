import react from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav>
      <img src={logo} />
      <div className="side-menu">
        <FaUserCircle />
        {menuIsOpen ? <GrClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
