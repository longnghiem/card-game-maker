import React from "react";
import styled from "styled-components";

const StyledCardInfo = styled.div`
  border: 1px black solid;
  width: 50%;
  padding: 1em;
  margin: 1em;
`;

const CardInfo = props => (
  <StyledCardInfo>
    <h1> Card type: </h1>
  </StyledCardInfo>
);

export default CardInfo;
