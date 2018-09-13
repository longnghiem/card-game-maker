import React from "react";
import styled from "styled-components";
import { Field, reduxForm, } from "redux-form";
import PropTypes from "prop-types";

const StyledCardInfo = styled.div`
  border: 1px black solid;
  width: 50%;
  padding: 1em;
  margin: 1em;
`;

const cardInfo = (props) => {
  const { handleSubmit, } = props;
  return (
    <StyledCardInfo>
      <form onSubmit={handleSubmit}>
        <div className="cardType">
          <label htmlFor="greenHero">
            <Field
              name="cardType"
              id="greenHero"
              component="input"
              type="radio"
              value="greenHero"
            />{" "}
            Green Hero
          </label>
          <label htmlFor="blueHero">
            <Field name="cardType" id="blueHero" component="input" type="radio" value="blueHero" />{" "}
            Blue Hero
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledCardInfo>
  );
};

cardInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "cardInfo",
  initialValues: {
    cardType: "blueHero",
  },
  enableReinitialize: true,
})(cardInfo);
