import React, { Component, } from "react";
import { connect, } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, } from "react-router-dom";
import { fetchCards as fetchCardsAction, } from "../../store/actions/dashboardActions";
import { getCards, } from "../../store/reducers";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

const StyledDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2em;
  margin-top: 7em;

  a > div {
    width: 173px;
    height: 246px;
    margin: 1em;
    border-width: 0.5em;
  }
  a {
    text-decoration: none;
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
  .separator {
    height: 3px;
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
      <Link to={`/editCard/${card._id}`} key={card._id}>
        <CardWrapper
          selectedColor={card.color}
          fileUrl={card.fileUrl}
          heroName={card.heroName}
          cardNumber={card.cardNumber}
          ability={card.ability}
        />
      </Link>
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
