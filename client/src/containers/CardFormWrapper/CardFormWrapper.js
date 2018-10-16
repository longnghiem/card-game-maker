import React from "react";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import setHeroImage from "../../store/actions/cardBuilderActions";
import { addCard as addCardAction, } from "../../store/actions/dashboardActions";
import CardForm from "../../components/CardForm/CardForm";

const CardFormWrapper = (props) => {
  const {
    selectedColor, setImage, addCard, history,
  } = props;
  const fileSelectedHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const submitHandler = (values) => {
    addCard(values);
    history.push("/");
  };
  return (
    <CardForm
      initialValues={{
        heroName: "Cloud Tea",
        ability:
          "If this card is in your hand and is looked at by another player, you are eliminated.",
        cardNumber: "1",
        color: "#222",
      }}
      selectedColor={selectedColor}
      onFileSelected={fileSelectedHandler}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    />
  );
};

CardFormWrapper.propTypes = {
  setImage: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  history: PropTypes.shape({}).isRequired,
};

CardFormWrapper.defaultProps = {
  selectedColor: "#222",
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setImage: setHeroImage,
  addCard: addCardAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormWrapper);
