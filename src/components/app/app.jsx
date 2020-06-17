import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({offerCount, rentalOffers}) => {
  return (
    <Main offerCount={offerCount} rentalOffers={rentalOffers}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  rentalOffers: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default App;
