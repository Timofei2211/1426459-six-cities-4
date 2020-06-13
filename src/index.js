import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  offersCount: 48,
};

ReactDOM.render(
    <App offerCount = {settings.offersCount}
    />,
    document.querySelector(`#root`)
);
