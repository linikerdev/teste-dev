import { Button, Input, InputGroup } from "reactstrap";
import styled from "styled-components";

export const SearchContainer = styled(InputGroup)`
  position: relative;
  padding: 30px 20px;
  margin: 20px auto;
`;
export const SearchInput = styled(Input)`
  padding: 25px;
`;
export const SearchSelect = styled.select`
  padding: 0 30px;
  background-color: #fff;;
  border: none;
`;

export const ButtonSearch = styled(Button)`
  background: #ddd;
  border: none;
  color: #000;
  padding: 0 30px;

  :hover {
    background-color: #eee !important;
    color: #000;
  }
  /* :link {
    background-color: blue !important;
  }
  :active {
    background-color: orange !important;
  }
  :visited {
    background-color: pink !important;
  }
  :focus {
    background-color: black !important;
  } */
`;
