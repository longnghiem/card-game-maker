import React from "react";
import styled from "styled-components";
import CardPreview from "../CardPreview/CardPreview";
import CardInfo from "../CardInfo/CardInfo";

const StyledNewCardPanel = styled.div`
  display: flex;
  margin-top: 3em;
  padding: 2em;
`;

const newCardPanel = props => (
  <StyledNewCardPanel>
    {/* CardInfo must be rendered before CardPreview
        ReduxForm must be connected before accessing to store */}
    <CardInfo {...props} />
    <CardPreview />
  </StyledNewCardPanel>
);

export default newCardPanel;
