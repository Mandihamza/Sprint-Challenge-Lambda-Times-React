import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {cards.map(card => (
            <Card key={card.headline} card={card} />
          ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming 

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Cards;