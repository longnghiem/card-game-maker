import React, { Component, } from "react";
import styled from "styled-components";
import CardPreview from "../CardPreview/CardPreview";
import CardInfo from "../CardInfo/CardInfo";

const StyledDashboard = styled.div`
  display: flex;
`;

class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        {/* CardInfo must be rendered before CardPreview
        ReduxForm must be connected before accessing to store */}
        <CardInfo />
        <CardPreview />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
