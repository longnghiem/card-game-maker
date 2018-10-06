import React from "react";
import styled from "styled-components";
import CardPreview from "../CardPreview/CardPreview";
import CardInfo from "../CardInfo/CardInfo";

const StyledNewCardPanel = styled.div`
  display: flex;
`;

const newCardPanel = () => (
  <StyledNewCardPanel>
    {/* CardInfo must be rendered before CardPreview
        ReduxForm must be connected before accessing to store */}
    <CardInfo />
    <CardPreview />
  </StyledNewCardPanel>
);

export default newCardPanel;
