import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  offersCount: 48,
  rentalOffers: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};


ReactDOM.render(
    <App offerCount = {Data.offersCount} rentalOffers = {Data.rentalOffers}
    />,
    document.querySelector(`#root`)
);
