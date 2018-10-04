import React from "react";
import styled from "styled-components";
import { Field, reduxForm, } from "redux-form";
import PropTypes from "prop-types";
import { SketchPicker, } from "react-color";
import { connect, } from "react-redux";
import setBorderColor from "../../store/actions/cardTemplateActions";

const StyledCardInfo = styled.div`
  border: 1px black solid;
  width: 50%;
  padding: 1em;
  margin: 1em;

  textarea {
    height: 100px;
  }

  input,
  textarea {
    width: 220px;
    margin: 0.5em 0;
  }

  .input-section {
    margin-bottom: 0.5em;
  }
`;

let cardInfo = (props) => {
  const { handleSubmit, setBdColor, bdColor, } = props;
  const handleChange = (color) => {
    setBdColor(color.hex);
  };
  return (
    <StyledCardInfo>
      <form onSubmit={handleSubmit}>
        <div className="input-section">
          <label>Hero Name</label>
          <div>
            <Field name="heroName" component="input" type="text" placeholder="Hero Name" />
          </div>
        </div>
        <div className="input-section">
          <label>Card Number</label>
          <div>
            <Field name="cardNumber" component="input" type="text" placeholder="Card Number" />
          </div>
        </div>

        <div>
          <label>Ability</label>
          <div className="input-section">
            <Field name="ability" component="textarea" type="text" placeholder="Ability" />
          </div>
        </div>
        <SketchPicker onChange={handleChange} color={bdColor} />
        <div>
          <input type="file" />
        </div>
      </form>
    </StyledCardInfo>
  );
};

cardInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setBdColor: PropTypes.func.isRequired,
  bdColor: PropTypes.string,
};

cardInfo.defaultProps = {
  bdColor: "#222",
};

const mapStateToProps = state => ({
  bdColor: state.cardTemplate.bdColor,
});

const mapDispatchToProps = dispatch => ({
  setBdColor: color => dispatch(setBorderColor(color)),
});

cardInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(cardInfo);

export default reduxForm({
  form: "cardInfo",
  initialValues: {
    heroName: "Cloud Tea",
    ability: "If this card is in your hand and is looked at by another player, you are eliminated.",
    cardNumber: "1",
  },
  enableReinitialize: true,
})(cardInfo);
