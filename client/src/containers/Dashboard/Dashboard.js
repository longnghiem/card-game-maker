import React, { Component, } from "react";
import { connect, } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import fetchCardsAction from "../../store/actions/dashboardActions";
import { getCards, } from "../../store/reducers";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

const StyledDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  margin-top: 7em;

  & > div {
    width: 173px;
    height: 246px;
    margin-bottom: 1em;
    border-width: 0.5em;
  }

  .card-name {
    font-size: 15px;
  }
  .ability {
    font-size: 8px;
  }
  .card-number {
    font-size: 48px;
  }
`;

class Dashboard extends Component {
  componentDidMount = () => {
    const { fetchCards, } = this.props;
    fetchCards();
  };

  render() {
    const { cards, } = this.props;
    const renderingCards = cards.map(card => (
      <CardWrapper
        key={card._id}
        borderColor={card.borderColor}
        fileUrl={card.fileUrl}
        heroName={card.heroName}
        cardNumber={card.cardNumber}
        ability={card.ability}
      />
    ));
    return <StyledDashboard>{renderingCards}</StyledDashboard>;
  }
}

const mapStateToProps = state => ({
  cards: getCards(state),
});

const mapDispatchToProps = {
  fetchCards: fetchCardsAction,
};

Dashboard.propTypes = {
  fetchCards: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
