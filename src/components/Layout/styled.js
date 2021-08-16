import { Navbar } from "reactstrap";
import styled from "styled-components";

export const Main = styled.main`
`;

export const SNavbar = styled(Navbar)`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #000;
`;

export const Logo = styled.img`
  max-width: 100px;
`;

export const Footer = styled.footer`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
