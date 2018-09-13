import React, { Component, } from "react";
import styled from "styled-components";
import { connect, } from "react-redux";
import PropTypes from "prop-types";

import greenTemplate from "../../assets/images/green_template.jpg";
import blueTemplate from "../../assets/images/blue_template.jpg";

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
    const { cardType, } = this.props;
    if (typeof cardType === "undefined") {
      return null;
    }
    let backgroundUrl;
    switch (cardType) {
      case "greenHero":
        backgroundUrl = greenTemplate;
        break;
      case "blueHero":
        backgroundUrl = blueTemplate;
        break;
      default:
        backgroundUrl = blueTemplate;
    }
    const CardTemplate = styled.div`
      height: 600px;
      width: 390px;
      background-image: url(${backgroundUrl});
      background-size: cover;
    `;
    return (
      <StyledCardPreview>
        <CardTemplate />
      </StyledCardPreview>
    );
  }
}

CardPreview.propTypes = {
  cardType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cardType: state.form.cardInfo.values.cardType,
});

export default connect(mapStateToProps)(CardPreview);
