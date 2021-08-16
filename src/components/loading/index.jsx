import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const Loading = (props) => {
  return (
    <LoadingContainer>
      <Spinner color="light" size="100" />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .spinner-border {
    width: 70px;
    height: 70px;
  }
`;
