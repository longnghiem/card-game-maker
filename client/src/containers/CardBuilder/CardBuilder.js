import React from "react";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import cloudTea from "../../assets/images/cloudTea.jpg";
import {
  getAbility, getHeroName, getCardNumber, getColor, getFileUrl,
} from "../../store/reducers";

const CardBuilder = (props) => {
  const {
    color, heroName, ability, cardNumber, fileUrl, forwardingRef,
  } = props;
  return (
    <div ref={forwardingRef}>
      <CardWrapper
        selectedColor={color}
        fileUrl={fileUrl}
        heroName={heroName}
        ability={ability}
        cardNumber={cardNumber}
      />
    </div>
  );
};

CardBuilder.propTypes = {
  color: PropTypes.string.isRequired,
  fileUrl: PropTypes.string,
  heroName: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  forwardingRef: PropTypes.shape({}).isRequired,
};

CardBuilder.defaultProps = {
  fileUrl: cloudTea,
};

const mapStateToProps = state => ({
  color: getColor(state),
  fileUrl: getFileUrl(state),
  heroName: getHeroName(state),
  ability: getAbility(state),
  cardNumber: getCardNumber(state),
});

const ConnectedCardBuilder = connect(mapStateToProps)(CardBuilder);

export default React.forwardRef((props, ref) => (
  <ConnectedCardBuilder {...props} forwardingRef={ref} />
));
