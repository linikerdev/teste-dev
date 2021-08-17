import React, { useState } from "react";
import { InputGroupAddon } from "reactstrap";
import { BiSearchAlt } from "react-icons/bi";
import { ButtonSearch, SearchContainer, SearchInput } from "./style";

const Search = ({ search }) => {
  const [form, setForm] = useState({});
  const handleChange = (v) => {
    setForm({
      ...form,
      [v.target.name]: v.target.value,
    });
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Faça sua busca pelos filmes de STAR WARS"
        type="search"
        onChange={handleChange}
        name="term"
        value={form.term || ""}
      />
      <InputGroupAddon addonType="append"></InputGroupAddon>
      <InputGroupAddon addonType="append">
        <ButtonSearch onClick={() => search(form)}>
          <BiSearchAlt />
        </ButtonSearch>
      </InputGroupAddon>
    </SearchContainer>
  );
};

export default Search;
