import React from "react";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import cloudTea from "../../assets/images/cloudTea.jpg";

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
  borderColor: state.cardBuilder.cardBorderColor,
  fileUrl: state.cardBuilder.fileUrl,
  heroName: state.form.cardInfo.values.heroName,
  ability: state.form.cardInfo.values.ability,
  cardNumber: state.form.cardInfo.values.cardNumber,
});

const ConnectedCardBuilder = connect(mapStateToProps)(CardBuilder);

export default React.forwardRef((props, ref) => (
  <ConnectedCardBuilder {...props} forwardingRef={ref} />
));
