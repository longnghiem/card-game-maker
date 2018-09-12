import React, { Component, } from "react";
import styled from "styled-components";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardInfo from "../../components/CardInfo/CardInfo";

const StyledDashboard = styled.div`
  display: flex;
`;

class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        <CardPreview />
        <CardInfo />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
