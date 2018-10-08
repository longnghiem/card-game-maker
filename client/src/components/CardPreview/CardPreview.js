import React, { Component, } from "react";
import styled from "styled-components";
import domToImage from "dom-to-image";
import PropTypes from "prop-types";
import { connect, } from "react-redux";
import CardBuilder from "../../containers/CardBuilder/CardBuilder";
import { getHeroName, } from "../../store/reducers";

const StyledCardPreview = styled.div`
  border: 1px #91651c solid;
  width: 50%;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 1em;

  button {
    margin: 2em auto 1em;
    width: 100px;
    height: 40px;
    font-weight: 600;
    background: #e0d553;
    color: #2c2906;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    box-shadow: 2px 2px #2c2906;
  }
`;

class CardPreview extends Component {
  previewDiv = React.createRef();

  convertToPngAndDownload = () => {
    const { heroName, } = this.props;
    domToImage.toPng(this.previewDiv.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${heroName}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  render() {
    return (
      <StyledCardPreview>
        <CardBuilder ref={this.previewDiv} />
        <button type="button" onClick={this.convertToPngAndDownload}>
          Download
        </button>
      </StyledCardPreview>
    );
  }
}

CardPreview.propTypes = {
  heroName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  heroName: getHeroName(state),
});

export default connect(mapStateToProps)(CardPreview);
