import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

const settings = {
  offersCount: 45,
};

ReactDOM.render(
    <App offersCount = {settings.offersCount}
    />,
    document.querySelector(`#root`)
);
