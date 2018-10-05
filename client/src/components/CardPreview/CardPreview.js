import React, { Component, } from "react";
import styled from "styled-components";
import domToImage from "dom-to-image";
import CardTemplate from "../../containers/CardTemplate/CardTemplate";

const StyledCardPreview = styled.div`
  border: 1px black solid;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 1em;

  button {
    margin: 1em auto;
  }
`;

class CardPreview extends Component {
  previewDiv = React.createRef();

  convertToPngAndDownload = () => {
    domToImage.toPng(this.previewDiv.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = dataUrl;
      link.click();
    });
  };

  render() {
    return (
      <StyledCardPreview>
        <CardTemplate ref={this.previewDiv} />
        <button type="button" onClick={this.convertToPngAndDownload}>
          Download
        </button>
      </StyledCardPreview>
    );
  }
}

export default CardPreview;
