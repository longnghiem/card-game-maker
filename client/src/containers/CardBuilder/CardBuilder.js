import React from "react";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import cloudTea from "../../assets/images/cloudTea.jpg";
import {
  getAbility,
  getHeroName,
  getCardNumber,
  getBdColor,
  getFileUrl,
} from "../../store/reducers";

const CardBuilder = (props) => {
  const {
    borderColor, heroName, ability, cardNumber, fileUrl, forwardingRef,
  } = props;
  return (
    <div ref={forwardingRef}>
      <CardWrapper
        borderColor={borderColor}
        fileUrl={fileUrl}
        heroName={heroName}
        ability={ability}
        cardNumber={cardNumber}
      />
    </div>
  );
};

CardBuilder.propTypes = {
  borderColor: PropTypes.string.isRequired,
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
  borderColor: getBdColor(state),
  fileUrl: getFileUrl(state),
  heroName: getHeroName(state),
  ability: getAbility(state),
  cardNumber: getCardNumber(state),
});

const ConnectedCardBuilder = connect(mapStateToProps)(CardBuilder);

export default React.forwardRef((props, ref) => (
  <ConnectedCardBuilder {...props} forwardingRef={ref} />
));
