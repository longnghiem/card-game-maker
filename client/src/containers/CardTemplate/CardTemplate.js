import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import cloudTea from "../../assets/images/cloudTea.jpg";
import cardOverlay from "../../assets/images/overlay.png";

const StyledCardTemplate = styled.div`
  height: 485px;
  width: 346px;
  border: 20px solid;
  border-color: ${props => props.borderColor || "#222"};
  border-radius: 0.6em;
  position: relative;
  background-image: url(${cloudTea});
  background-size: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 1;

  img {
    height: 100%;
  }

  .left-gradient {
    background-image: linear-gradient(
      to right,
      ${props => props.color || "#222"} 4%,
      transparent 24%,
      transparent 24%,
      transparent 24%,
      transparent 24%
    );
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    opacity: 0.3;
  }
`;

const StyledCardNumber = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 15px;
  margin-left: 25px;
  color: ${props => props.fontColor || "#222"};
  font-size: 96px;
  font-family: Cooper_Black;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  top: 65%;
  .separator {
    margin-left: 53px;
    height: 5px;
    width: 85%;
    background-image: linear-gradient(to bottom, ${props => props.color || "#222"}, gray);
  }
`;

const StyledCardName = styled.div`
  margin-top: 5px;
  margin-left: 60px;
  font-size: 30px;
  font-weight: 800;
  font-family: Cooper_Black;
  color: ${props => props.fontColor || "#222"};
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-name {
    background: -webkit-linear-gradient(#aaa, ${props => props.fontColor || "#222"});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledAbility = styled.div`
  width: 65%;
  margin-top: 35px;
  margin-right: 20px;
  margin-left: 100px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Calibri";
  color: ${props => props.fontColor || "#222"};
`;

const CardTemplate = (props) => {
  const {
    borderColor, heroName, ability, cardNumber,
  } = props;
  return (
    <StyledCardTemplate borderColor={borderColor}>
      <CardOverlay color={borderColor}>
        <img src={cardOverlay} alt="curve left" />
        <div className="left-gradient" />
      </CardOverlay>
      <StyledCardNumber fontColor={borderColor}> {cardNumber}</StyledCardNumber>
      <StyledContentWrapper color={borderColor}>
        <div className="separator" />
        <StyledCardName fontColor={borderColor}>
          {" "}
          <div className="hero-name">{heroName}</div>
        </StyledCardName>
        <StyledAbility fontColor={borderColor}> {ability}</StyledAbility>
      </StyledContentWrapper>
    </StyledCardTemplate>
  );
};

CardTemplate.propTypes = {
  borderColor: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  borderColor: state.cardTemplate.cardBorderColor,
  heroName: state.form.cardInfo.values.heroName,
  ability: state.form.cardInfo.values.ability,
  cardNumber: state.form.cardInfo.values.cardNumber,
});

export default connect(mapStateToProps)(CardTemplate);