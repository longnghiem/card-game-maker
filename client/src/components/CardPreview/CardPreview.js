import React, { Component, } from "react";
import styled from "styled-components";
import CardTemplate from "../../containers/CardTemplate/CardTemplate";

const StyledCardPreview = styled.div`
  border: 1px black solid;
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1em;
  margin: 1em;
`;

class CardPreview extends Component {
  render() {
    return (
      <StyledCardPreview>
        <CardTemplate />
      </StyledCardPreview>
    );
  }
}

export default CardPreview;
