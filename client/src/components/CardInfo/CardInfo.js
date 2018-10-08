import React from "react";
import styled from "styled-components";
import { Field, reduxForm, } from "redux-form";
import PropTypes from "prop-types";
import { SketchPicker, } from "react-color";
import { connect, } from "react-redux";
import axios from "axios";
import { setBorderColor, setHeroImage, } from "../../store/actions/cardBuilderActions";
import { getBdColor, } from "../../store/reducers";

const StyledCardInfo = styled.div`
  border: 1px #91651c solid;
  width: 50%;
  min-width: 420px;
  padding: 1em;
  margin: 1em;

  form {
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
      "heroname colorpicker"
      "cardnumber colorpicker"
      "ability colorpicker"
      "fileurl ."
      "uploadimage .";
  }
  .hero-name {
    grid-area: heroname;
  }
  .color-picker {
    grid-area: colorpicker;
  }
  .card-number {
    grid-area: cardnumber;
  }
  .ability {
    grid-area: ability;
  }
  .file-url {
    grid-area: fileurl;
  }
  .upload-image {
    grid-area: uploadimage;
  }
  label {
    color: #94111b;
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
    color: #2c1f0a;
  }
  .input-section {
    margin-bottom: 0.5em;
    width: 45%;
  }

  button {
    width: 220px;
    height: 50px;
    font-weight: 600;
    background: #daefb3;
    color: #182904;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    box-shadow: 2px 2px #417505;
  }

  @media only screen and (max-width: 1130px) {
    min-width: 250px;

    form {
      grid-template-areas:
        "heroname"
        "cardnumber"
        "ability"
        "colorpicker"
        "fileurl"
        "uploadimage";
    }
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
        <div className="input-section hero-name">
          <label>Hero Name</label>
          <div>
            <Field name="heroName" component="input" type="text" placeholder="Hero Name" />
          </div>
        </div>
        <div className="input-section card-number">
          <label>Card Number</label>
          <div>
            <Field name="cardNumber" component="input" type="text" placeholder="Card Number" />
          </div>
        </div>
        <div>
          <label>Ability</label>
          <div className="input-section ability">
            <Field name="ability" component="textarea" type="text" placeholder="Ability" />
          </div>
        </div>
        <div className="input-section file-url">
          <label>File Url</label>
          <div>
            <Field name="fileUrl" component="input" type="text" placeholder="Url" />
          </div>
        </div>
        <SketchPicker className="color-picker" onChange={handleChange} color={bdColor} />
        <Field name="borderColor" component="input" type="hidden" />
        <br />
        <div className="upload-image">
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
  bdColor: getBdColor(state),
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
