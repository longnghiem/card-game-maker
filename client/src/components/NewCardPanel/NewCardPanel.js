import React from "react";
import styled from "styled-components";
import CardPreview from "../CardPreview/CardPreview";
import CardFormWrapper from "../../containers/CardFormWrapper/CardFormWrapper";

const StyledNewCardPanel = styled.div`
  display: flex;
  margin-top: 3em;
  padding: 2em;
`;

const newCardPanel = props => (
  <StyledNewCardPanel>
    {/* CardFormWrapper must be rendered before CardPreview
        ReduxForm must be connected before accessing to store */}
    <CardFormWrapper {...props} />
    <CardPreview />
  </StyledNewCardPanel>
);

export default newCardPanel;
