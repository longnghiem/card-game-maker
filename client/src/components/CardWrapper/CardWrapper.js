import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import cloudTea from "../../assets/images/cloudTea.jpg";
import cardOverlay from "../../assets/images/overlay2.png";

const StyledCardWrapper = styled.div`
  height: 485px;
  width: 346px;
  border: 1em solid;
  border-color: ${props => props.color || "#222"};
  border-radius: 0.6em;
  position: relative;
  background-image: url(${props => props.fileUrl || cloudTea});
  background-size: cover;
  margin: auto;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
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
  bottom: 3%;
  left: 6%;
  color: ${props => props.fontColor || "#222"};
  font-size: 96px;
  font-family: Cooper_Black;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  top: 65%;
  .separator {
    margin-left: 15.2%;
    height: 5px;
    width: 85%;
    background-image: linear-gradient(to bottom, ${props => props.color || "#222"}, gray);
    border-radius: 10%;
  }
`;

const StyledCardName = styled.div`
  margin-top: 1%;
  margin-left: 20%;
  font-size: 30px;
  font-weight: 800;
  font-family: Cooper_Black;
  color: ${props => props.fontColor || "#222"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledAbility = styled.div`
  width: 65%;
  margin-top: 10%;
  position: relative;
  left: 30%;
  font-size: 16px;
  font-weight: 600;
  font-family: "Calibri";
  color: ${props => props.fontColor || "#222"};
`;

const cardWrapper = (props) => {
  const {
    selectedColor, fileUrl, heroName, cardNumber, ability,
  } = props;
  return (
    <StyledCardWrapper color={selectedColor} fileUrl={fileUrl}>
      <CardOverlay color={selectedColor}>
        <img src={cardOverlay} alt="curve left" />
        <div className="left-gradient" />
      </CardOverlay>
      <StyledCardNumber className="card-number" fontColor={selectedColor}>
        {cardNumber}
      </StyledCardNumber>
      <StyledContentWrapper color={selectedColor}>
        <div className="separator" />
        <StyledCardName className="card-name" fontColor={selectedColor}>
          {heroName}
        </StyledCardName>
        <StyledAbility className="ability" fontColor={selectedColor}>
          {ability}
        </StyledAbility>
      </StyledContentWrapper>
    </StyledCardWrapper>
  );
};

cardWrapper.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  fileUrl: PropTypes.string,
  heroName: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  forwardingRef: PropTypes.shape({}),
};

cardWrapper.defaultProps = {
  forwardingRef: {},
  fileUrl: cloudTea,
};

export default cardWrapper;
