import React, { useEffect, useCallback, useState } from "react";
import { InputGroupAddon } from "reactstrap";
import { BiSearchAlt } from "react-icons/bi";
import {
  ButtonSearch,
  SearchContainer,
  SearchInput,
  SearchSelect,
} from "./style";
import { GetThemes, searchTerm } from "../../services/root";
import { toast } from "react-toastify";
import Loading from "../loading";

const Search = () => {
  const [loading] = useState(false);
  const [form, setForm] = useState({});
  const [topics, setTopics] = useState({});
  const [start, setStart] = useState(false);
  const getRoot = useCallback(async () => {
    if (!start) {
      try {
        const result = await GetThemes();
        if (result.data) {
          setStart(true);
          setForm({ form, type: Object.keys(result.data)[0] });
          setTopics(result.data);
        }
      } catch (error) {
        toast.info("Aconteceu um erro ao carregar a busca, tente novamente");
      }
    }
  }, [form, start]);

  useEffect(() => {
    getRoot();
  }, [getRoot]);

  if (loading || Object.keys(topics).length === 0) {
    return <Loading />;
  }

  const handleChange = (v) => {
    setForm({
      ...form,
      [v.target.name]: v.target.value,
    });
  };
  const submitSearch = async () => {
    try {
      const result = await searchTerm(form.type, form.term);
      console.log("result", result.data);
    } catch (error) {
      toast.error('Erro ao fazer a busca, tente novamente')
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Faça sua busca"
        type="search"
        onChange={handleChange}
        name="term"
        value={form.term || ""}
      />
      <InputGroupAddon addonType="append">
        <SearchSelect type="select" name="type" onChange={handleChange}>
          {topics &&
            Object.keys(topics).map((item, i) => (
              <option key={i}>{item}</option>
            ))}
        </SearchSelect>
      </InputGroupAddon>
      <InputGroupAddon addonType="append">
        <ButtonSearch onClick={submitSearch}>
          <BiSearchAlt />
        </ButtonSearch>
      </InputGroupAddon>
    </SearchContainer>
  );
};

export default Search;
