import React from "react";
import styled from "styled-components";
import greenTemplate from "../../assets/images/green_template.jpg";

const StyledCardPreview = styled.div`
  border: 1px black solid;
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1em;
  margin: 1em;
`;

const CardTemplate = styled.div`
  height: 600px;
  width: 390px;
  background-image: url(${greenTemplate});
  background-size: cover;
`;

const CardPreview = props => (
  <StyledCardPreview>
    <CardTemplate />
  </StyledCardPreview>
);

export default CardPreview;
