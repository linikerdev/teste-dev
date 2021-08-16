import React, { useState } from "react";
import { NavbarToggler, NavbarBrand } from "reactstrap";
import LogoImg from "../../assets/img/logo.png";
import { Logo, SNavbar } from "./styled";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <SNavbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Logo src={LogoImg} alt="Star Wars" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </SNavbar>
    </header>
  );
};

export default Header;

