import React from "react";
import styled from "styled-components";
import { Field, reduxForm, } from "redux-form";
import PropTypes from "prop-types";
import { SketchPicker, } from "react-color";
import { connect, } from "react-redux";
import axios from "axios";
import { setBorderColor, setHeroImage, } from "../../store/actions/cardBuilderActions";

const StyledCardInfo = styled.div`
  border: 1px black solid;
  width: 50%;
  min-width: 420px;
  padding: 1em;
  margin: 1em;

  label {
    color: #48483a;
    font-weight: Bold;
  }
  textarea {
    height: 100px;
    resize: none;
  }
  input,
  textarea {
    width: 220px;
    margin: 0.5em 0;
    padding: 0.5em;
  }
  .input-section {
    margin-bottom: 0.5em;
  }
`;
const submitHandler = (values, dispatch, props) => {
  axios.post("/api/cards", values).then((res) => {
    props.history.push("/");
  });
};

let cardInfo = (props) => {
  const {
    setBdColor, bdColor, setImage, change, handleSubmit,
  } = props;
  const fileSelectedHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handleChange = (color) => {
    setBdColor(color.hex);
    change("borderColor", color.hex);
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
        <div className="input-section">
          <label>File Url</label>
          <div>
            <Field name="fileUrl" component="input" type="text" placeholder="Url" />
          </div>
        </div>
        <div>
          <label>Ability</label>
          <div className="input-section">
            <Field name="ability" component="textarea" type="text" placeholder="Ability" />
          </div>
        </div>
        <SketchPicker onChange={handleChange} color={bdColor} />
        <Field name="borderColor" component="input" type="hidden" />
        <br />
        <div>
          <label>Upload Hero Image </label> <br />
          <input type="file" onChange={fileSelectedHandler} />
        </div>
        <button type="submit">Save card </button>
      </form>
    </StyledCardInfo>
  );
};

cardInfo.propTypes = {
  setBdColor: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bdColor: PropTypes.string,
  history: PropTypes.shape({}).isRequired,
};

cardInfo.defaultProps = {
  bdColor: "#222",
};

const mapStateToProps = state => ({
  bdColor: state.cardBuilder.bdColor,
});

const mapDispatchToProps = dispatch => ({
  setBdColor: color => dispatch(setBorderColor(color)),
  setImage: uploadedFileUrl => dispatch(setHeroImage(uploadedFileUrl)),
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
    borderColor: "#222",
  },
  onSubmit: submitHandler,
  enableReinitialize: true,
})(cardInfo);
