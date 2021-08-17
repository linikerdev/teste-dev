import React, { useEffect, useState } from "react";
import styled from "styled-components";
import http from "../../config/http";
import * as R from "ramda";

const fnSort = R.sortWith([R.ascend(R.prop("name"))]);

const ItemSearchComponent = ({ data }) => {
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    if (data.characters.length > 0) {
      const characters = data.characters;

      Promise.all(characters.map((item) => http.get(item)))
        .then((values) => values.map((v) => v.data))
        .then((res) => fnSort(res))
        .then((res) => setSuggestion(res));
    }
  }, [data.characters]);

  if (data.length === 0) {
    return <div />;
  } else {
    return (
      <ItemSearch>
        <TitleName>{data.title}</TitleName>
        <div>
          <strong>Diretor:</strong> {data.director}
        </div>
        <div>
          <strong>Produtor:</strong> {data.producer}
        </div>
        <Suggests>
          <span>Personagens do mesmo Filme:</span>
          <ul>
            {suggestion?.map((v, id) => (
              <li key={id}>{v.name}</li>
            ))}
          </ul>
        </Suggests>
      </ItemSearch>
    );
  }
};

export default ItemSearchComponent;

const TitleName = styled.div`
  font-weight: 700;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin: 10px auto;
`;
const Suggests = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0;
  margin: 10px auto;
  span {
    color: #2c3d9f;
  }
`;
const ItemSearch = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px 0;
`;
