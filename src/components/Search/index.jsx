import { Input, InputGroup, InputGroupAddon } from "reactstrap";
// import { SearchInput } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import { ButtonSearch, SearchContainer, SearchInput } from "./style";
const Search = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Faça sua busca" type="search" />
      <InputGroupAddon addonType="append">
        <ButtonSearch>
          <BiSearchAlt />
        </ButtonSearch>
      </InputGroupAddon>
    </SearchContainer>
  );
};

export default Search;
